// Waitlist sign-ups: checks the Cloudflare Turnstile pass, then files the
// sign-up in Netlify Forms ("waitlist-verified"). Bots without a valid pass
// never reach the form list.
const FIELDS = ['name', 'email', 'country', 'role', 'products', 'username'];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async (req) => {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  const wantsJson = (req.headers.get('accept') || '').includes('application/json');
  const origin = new URL(req.url).origin;
  const reply = (ok, status, error) => wantsJson
    ? Response.json(ok ? { ok } : { ok, error }, { status })
    : ok ? Response.redirect(`${origin}/waitlist.html?joined=1`, 303) : new Response(error, { status });

  let form;
  try { form = await req.formData(); } catch { return reply(false, 400, 'Could not read the form.'); }

  // Hidden trap field: people leave it empty, bots fill it. Pretend it worked.
  if (form.get('company')) return reply(true, 200);

  const token = form.get('cf-turnstile-response');
  if (!token) return reply(false, 400, 'Please wait a moment for the security check, then try again.');
  const secret = process.env.TURNSTILE_SECRET;
  if (!secret) return reply(false, 500, 'The security check is not set up yet.');

  const check = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({ secret, response: String(token), remoteip: req.headers.get('x-nf-client-connection-ip') || '' }),
  }).then((r) => r.json()).catch(() => ({ success: false }));
  if (!check.success) return reply(false, 403, 'The security check failed. Please refresh the page and try again.');

  const name = String(form.get('name') || '').trim();
  const email = String(form.get('email') || '').trim();
  if (!name || !EMAIL.test(email)) return reply(false, 400, 'Please add your name and a valid email address.');

  const body = new URLSearchParams({ 'form-name': 'waitlist-verified' });
  for (const f of FIELDS) body.append(f, String(form.get(f) || '').trim().slice(0, 300));
  const saved = await fetch(`${origin}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  }).catch(() => null);
  if (!saved || !saved.ok) return reply(false, 502, 'Something went wrong. Please try again in a moment.');
  return reply(true, 200);
};

export const config = { path: '/api/waitlist' };
