// Blog editor sign-in, step 1: Decap opens this in a popup, and we send the
// editor to GitHub to approve. Step 2 is ../callback. The state cookie ties
// the two together, so a forged callback can't log anyone in.
import { NextResponse, type NextRequest } from "next/server";

import { DECAP_STATE_COOKIE } from "@/lib/decap";

export function GET(req: NextRequest) {
  const clientId = process.env.DECAP_GITHUB_CLIENT_ID;
  if (!clientId) {
    return new Response("The blog editor's GitHub sign-in is not set up yet.", { status: 500 });
  }

  // Only the two scopes Decap asks for; public_repo unless the repo is private.
  const scope = req.nextUrl.searchParams.get("scope") === "repo" ? "repo" : "public_repo";
  const state = crypto.randomUUID();
  const authorize = new URL("https://github.com/login/oauth/authorize");
  authorize.search = new URLSearchParams({
    client_id: clientId,
    redirect_uri: new URL("/api/decap/callback/", req.nextUrl.origin).toString(),
    scope,
    state
  }).toString();

  const res = NextResponse.redirect(authorize);
  res.cookies.set(DECAP_STATE_COOKIE, state, {
    httpOnly: true,
    secure: req.nextUrl.protocol === "https:",
    sameSite: "lax",
    path: "/api/decap/",
    maxAge: 600
  });
  return res;
}
