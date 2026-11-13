// Waitlist sign-ups: checks the Cloudflare Turnstile pass, then saves the person
// as a Resend contact (in the waitlist segment), so launch news can go out as a
// broadcast, and sends a welcome email. Bots without a valid pass never reach
// the list.
//
// Resend only accepts contact properties that already exist: create country,
// role, products and username (all text) under Audience > Properties first.
import { after, type NextRequest } from "next/server";

import { CONTACT_EMAIL } from "@/config/site";
import { welcomeEmail } from "@/lib/waitlist-email";

const PROPERTIES = ["country", "role", "products", "username"];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESEND = "https://api.resend.com";

type Contact = {
  email: string;
  first_name: string;
  last_name?: string;
  properties: Record<string, string>;
};

export async function POST(req: NextRequest) {
  const wantsJson = (req.headers.get("accept") ?? "").includes("application/json");
  const reply = (ok: boolean, status: number, error?: string) =>
    wantsJson
      ? Response.json(ok ? { ok } : { ok, error }, { status })
      : ok
        ? Response.redirect(new URL("/waitlist/?joined=1", req.url), 303)
        : new Response(error, { status });

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return reply(false, 400, "Could not read the form.");
  }
  const field = (name: string) => String(form.get(name) ?? "").trim().slice(0, 300);

  // Hidden trap field: people leave it empty, bots fill it. Pretend it worked.
  if (field("company")) return reply(true, 200);

  const token = form.get("cf-turnstile-response");
  if (!token) return reply(false, 400, "Please wait a moment for the security check, then try again.");
  const secret = process.env.TURNSTILE_SECRET;
  if (!secret) return reply(false, 500, "The security check is not set up yet.");
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return reply(false, 500, "Sign-ups are not set up yet.");

  const check: { success?: boolean } = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: new URLSearchParams({
        secret,
        response: String(token),
        remoteip: req.headers.get("x-real-ip") ?? ""
      })
    }
  )
    .then((r) => r.json())
    .catch(() => ({ success: false }));
  if (!check.success) {
    return reply(false, 403, "The security check failed. Please refresh the page and try again.");
  }

  const name = field("name");
  const email = field("email").toLowerCase();
  if (!name || !EMAIL.test(email)) {
    return reply(false, 400, "Please add your name and a valid email address.");
  }

  const [first, ...rest] = name.split(/\s+/);
  const properties = Object.fromEntries(
    PROPERTIES.map((p) => [p, field(p)]).filter(([, value]) => value)
  );
  const saved = await saveContact(apiKey, {
    email,
    first_name: first,
    last_name: rest.join(" ") || undefined,
    properties
  });
  if (!saved) return reply(false, 502, "Something went wrong. Please try again in a moment.");

  // Only on a first sign-up: joining twice updates the answers, not the inbox.
  // Sent after the response, so the email never slows down or fails a sign-up.
  if (saved === "new") {
    after(() =>
      sendWelcome(apiKey, email, {
        firstName: first,
        products: properties.products,
        username: properties.username
      })
    );
  }
  return reply(true, 200);
}

/**
 * The welcome email. Needs MAIL_FROM on a domain verified in Resend
 * ("Tipsona <hello@tipsona.co>"); without it no email is sent, so sign-ups
 * keep working before the domain is set up.
 */
async function sendWelcome(apiKey: string, to: string, details: Parameters<typeof welcomeEmail>[0]) {
  const from = process.env.MAIL_FROM;
  if (!from) return;

  const { subject, html, text } = welcomeEmail(details);
  const sent = await fetch(`${RESEND}/emails`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      // Two quick submits must not send two emails.
      "Idempotency-Key": `waitlist-welcome/${to}`
    },
    body: JSON.stringify({ from, to, reply_to: CONTACT_EMAIL, subject, html, text })
  }).catch(() => null);

  if (!sent?.ok) {
    const { message = "" }: { message?: string } = (await sent?.json().catch(() => ({}))) ?? {};
    console.error(`Resend did not send the waitlist welcome email (${sent?.status ?? "no response"}): ${message}`);
  }
}

/**
 * Adds the contact ("new"), or updates their answers if they signed up before
 * ("updated"). Null when Resend refused both.
 */
async function saveContact(apiKey: string, contact: Contact): Promise<"new" | "updated" | null> {
  const headers = { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" };
  const segment = process.env.RESEND_WAITLIST_SEGMENT_ID;

  const created = await fetch(`${RESEND}/contacts`, {
    method: "POST",
    headers,
    body: JSON.stringify({ ...contact, ...(segment && { segments: [{ id: segment }] }) })
  }).catch(() => null);
  if (!created) return null;
  if (created.ok) return "new";

  const { message = "" }: { message?: string } = await created.json().catch(() => ({}));
  if (created.status !== 409 && !/exist/i.test(message)) {
    console.error(`Resend refused the waitlist contact (${created.status}): ${message}`);
    return null;
  }
  const { email, ...answers } = contact;
  const updated = await fetch(`${RESEND}/contacts/${encodeURIComponent(email)}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify(answers)
  }).catch(() => null);
  return updated?.ok ? "updated" : null;
}
