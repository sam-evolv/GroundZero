import { NextResponse, type NextRequest } from "next/server";
import { authConfigured, sessionCookieName, verifyToken } from "@/lib/auth";

// Next 16 renamed middleware to proxy. Runs on the nodejs runtime.
// /api/hermes/run self-guards with HERMES_TRIGGER_SECRET so an external cron can
// reach it without the session cookie.
const PUBLIC_PATHS = ["/login", "/manifest.webmanifest", "/sw.js", "/api/hermes/run"];

export function proxy(request: NextRequest) {
  if (!authConfigured()) return NextResponse.next();

  const { pathname } = request.nextUrl;
  const isPublic =
    PUBLIC_PATHS.includes(pathname) ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/icon");
  if (isPublic) return NextResponse.next();

  const token = request.cookies.get(sessionCookieName())?.value;
  if (verifyToken(token)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = "/login";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
