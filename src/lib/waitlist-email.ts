// The email someone gets right after joining the waitlist. It promises only
// what the waitlist page promises: we'll email you when it's your turn.
import { CONTACT_EMAIL, SITE_URL } from "@/config/site";

type Welcome = {
  firstName: string;
  /** "TipStore, Tipper", as the form sends it */
  products?: string;
  username?: string;
};

/** Everything a person typed goes into HTML through this. */
const esc = (value: string) =>
  value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

// The site's tokens; email clients need them inline.
const INK = "#17120E";
const MUTED = "#6B6158";
const CANVAS = "#FBF8F4";
const LINE = "#E7DFD5";
const FLAME = "#FF5D02";
const CREAM = "#FFF6EC";
const FONT = "Helvetica, Arial, sans-serif";

export function welcomeEmail({ firstName, products, username }: Welcome) {
  const tipstore = new URL("/tipstore/", SITE_URL).toString();
  const subject = "You’re on the Tipsona waitlist";

  const told: Array<[string, string]> = [];
  if (products) told.push(["News about", products]);
  if (username) told.push(["The username you’d like", `tipstore.tipsona.co/${username}`]);

  const text = [
    `Hi ${firstName},`,
    "",
    "You’re on the Tipsona waitlist. Tipsona is opening soon, starting with TipStore, and we’ll email you when it’s your turn.",
    ...(told.length
      ? ["", "What you told us:", ...told.map(([k, v]) => `- ${k}: ${v}`)]
      : []),
    ...(username ? ["Availability is confirmed when you sign up."] : []),
    "",
    `Until then, see what TipStore can do: ${tipstore}`,
    "",
    "The Tipsona team",
    "",
    "You’re getting this because you joined the waitlist at tipsona.co. If that wasn’t you, reply to this email and we’ll remove you."
  ].join("\n");

  const rows = told
    .map(
      ([k, v]) => `<tr>
        <td style="padding:10px 0;border-top:1px solid ${LINE};font:14px/1.4 ${FONT};color:${MUTED};width:42%;vertical-align:top">${esc(k)}</td>
        <td style="padding:10px 0;border-top:1px solid ${LINE};font:600 14px/1.4 ${FONT};color:${INK};vertical-align:top">${esc(v)}</td>
      </tr>`
    )
    .join("");

  const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(subject)}</title></head>
<body style="margin:0;padding:0;background:${CANVAS}">
  <div style="display:none;max-height:0;overflow:hidden">We’ll email you when it’s your turn.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${CANVAS}">
    <tr><td align="center" style="padding:32px 16px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px">
        <tr><td style="padding:0 4px 20px;font:700 24px/1 ${FONT};color:${FLAME}">Tipsona</td></tr>
        <tr><td style="background:#FFFFFF;border:1px solid ${LINE};border-radius:16px;padding:32px 28px">
          <p style="margin:0 0 16px;font:600 24px/1.25 ${FONT};color:${INK}">You’re on the list.</p>
          <p style="margin:0 0 16px;font:16px/1.6 ${FONT};color:${INK}">Hi ${esc(firstName)},</p>
          <p style="margin:0 0 24px;font:16px/1.6 ${FONT};color:${INK}">Tipsona is opening soon, starting with TipStore, and we’ll email you when it’s your turn.</p>
          ${
            rows
              ? `<p style="margin:0 0 4px;font:600 13px/1.4 ${FONT};color:${MUTED};text-transform:uppercase;letter-spacing:.06em">What you told us</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 ${username ? "8px" : "24px"}">${rows}</table>`
              : ""
          }
          ${username ? `<p style="margin:0 0 24px;font:14px/1.5 ${FONT};color:${MUTED}">Availability is confirmed when you sign up.</p>` : ""}
          <a href="${tipstore}" style="display:inline-block;background:${INK};color:${CREAM};font:600 16px/1 ${FONT};text-decoration:none;padding:16px 24px;border-radius:999px">See what TipStore can do</a>
          <p style="margin:28px 0 0;font:16px/1.6 ${FONT};color:${INK}">The Tipsona team</p>
        </td></tr>
        <tr><td style="padding:20px 4px 0;font:13px/1.5 ${FONT};color:${MUTED}">
          You’re getting this because you joined the waitlist at tipsona.co. If that wasn’t you, reply to this email and we’ll remove you. Questions? Write to <a href="mailto:${CONTACT_EMAIL}" style="color:${MUTED}">${CONTACT_EMAIL}</a>.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  return { subject, html, text };
}
