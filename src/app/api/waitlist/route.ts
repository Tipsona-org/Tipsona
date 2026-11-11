// Waitlist sign-ups: checks the Cloudflare Turnstile pass, then saves the person
// as a Resend contact (in the waitlist segment), so launch news can go out as a
// broadcast. Bots without a valid pass never reach the list.
//
// Resend only accepts contact properties that already exist: create country,
// role, products and username (all text) under Audience > Properties first.
import type { NextRequest } from "next/server";

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
  return reply(true, 200);
}

/** Adds the contact, or updates their answers if they signed up before. */
async function saveContact(apiKey: string, contact: Contact) {
  const headers = { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" };
  const segment = process.env.RESEND_WAITLIST_SEGMENT_ID;

  const created = await fetch(`${RESEND}/contacts`, {
    method: "POST",
    headers,
    body: JSON.stringify({ ...contact, ...(segment && { segments: [{ id: segment }] }) })
  }).catch(() => null);
  if (!created) return false;
  if (created.ok) return true;

  const { message = "" }: { message?: string } = await created.json().catch(() => ({}));
  if (created.status !== 409 && !/exist/i.test(message)) {
    console.error(`Resend refused the waitlist contact (${created.status}): ${message}`);
    return false;
  }
  const { email, ...answers } = contact;
  const updated = await fetch(`${RESEND}/contacts/${encodeURIComponent(email)}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify(answers)
  }).catch(() => null);
  return Boolean(updated?.ok);
}
