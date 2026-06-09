import crypto from "node:crypto";

// Single-user passcode gate. The passcode you type is AUTH_PASSCODE; the cookie
// is an HMAC signed with AUTH_SECRET. When either is unset (local dev) the gate
// is open so the app stays runnable. This is the simplest secure option with no
// external service. It can be swapped for GitHub OAuth later.

const COOKIE = "gz_session";

export function sessionCookieName(): string {
  return COOKIE;
}

export function authConfigured(): boolean {
  return Boolean(process.env.AUTH_PASSCODE && process.env.AUTH_SECRET);
}

export function expectedToken(): string {
  const secret = process.env.AUTH_SECRET ?? "";
  return crypto.createHmac("sha256", secret).update("ground-zero").digest("hex");
}

export function verifyToken(token: string | undefined): boolean {
  if (!token) return false;
  return safeEqual(token, expectedToken());
}

export function checkPasscode(input: string): boolean {
  const passcode = process.env.AUTH_PASSCODE ?? "";
  if (!passcode) return false;
  return safeEqual(input, passcode);
}

function safeEqual(a: string, b: string): boolean {
  const bufferA = Buffer.from(a);
  const bufferB = Buffer.from(b);
  return bufferA.length === bufferB.length && crypto.timingSafeEqual(bufferA, bufferB);
}
