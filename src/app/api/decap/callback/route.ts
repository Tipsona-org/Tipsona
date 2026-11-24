// Blog editor sign-in, step 2: GitHub sends the editor back here with a code.
// We swap it for a token and hand that to the editor window with Decap's
// postMessage handshake, addressed only to this site's own origin.
import type { NextRequest } from "next/server";

import { DECAP_STATE_COOKIE as STATE_COOKIE } from "@/lib/decap";

type Outcome = { ok: true; token: string } | { ok: false; message: string };

export async function GET(req: NextRequest) {
  const { searchParams, origin } = req.nextUrl;
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const expected = req.cookies.get(STATE_COOKIE)?.value;

  if (!code || !state || !expected || state !== expected) {
    return reply({ ok: false, message: "Sign-in expired. Close this window and try again." });
  }

  const clientId = process.env.DECAP_GITHUB_CLIENT_ID;
  const clientSecret = process.env.DECAP_GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return reply({ ok: false, message: "The blog editor's GitHub sign-in is not set up yet." });
  }

  const data: { access_token?: string; error_description?: string } = await fetch(
    "https://github.com/login/oauth/access_token",
    {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: new URL("/api/decap/callback/", origin).toString()
      })
    }
  )
    .then((r) => r.json())
    .catch(() => ({}));

  return data.access_token
    ? reply({ ok: true, token: data.access_token })
    : reply({ ok: false, message: data.error_description || "GitHub did not sign you in. Please try again." });
}

/** The page the popup shows: it passes the result to the editor and closes. */
function reply(outcome: Outcome) {
  const message = outcome.ok
    ? `authorization:github:success:${JSON.stringify({ token: outcome.token, provider: "github" })}`
    : `authorization:github:error:${JSON.stringify({ message: outcome.message })}`;
  // Escaped so nothing in the message can end the script tag.
  const payload = JSON.stringify(message).replace(/</g, "\\u003c");

  const html = `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Signing in</title></head>
<body style="font:16px system-ui,sans-serif;padding:24px;color:#17120E">
<p>${outcome.ok ? "Signed in. You can close this window." : "Sign-in failed. You can close this window and try again."}</p>
<script>
(function () {
  var message = ${payload};
  var own = window.location.origin;
  function receive(e) {
    if (e.origin !== own) return; // only the editor on this site
    window.opener.postMessage(message, own);
    window.removeEventListener("message", receive);
  }
  window.addEventListener("message", receive);
  if (window.opener) window.opener.postMessage("authorizing:github", own);
})();
</script>
</body>
</html>`;

  const res = new Response(html, {
    status: outcome.ok ? 200 : 400,
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" }
  });
  // One use only
  res.headers.append("Set-Cookie", `${STATE_COOKIE}=; Path=/api/decap/; Max-Age=0; HttpOnly; SameSite=Lax`);
  return res;
}
