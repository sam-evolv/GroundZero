import { NextResponse } from "next/server";
import { runAndWriteCouncil } from "@/lib/hermes/run";

export const dynamic = "force-dynamic";

// The council routine API. Closed by default: it runs only when a bearer token
// matching HERMES_TRIGGER_SECRET (manual or external cron) or CRON_SECRET (the
// secret Vercel Cron sends) is presented. GET is for the daily Vercel cron; POST
// accepts an optional focus. The in-app Run council button uses the server
// action instead, authenticated by the session.
function authorized(request: Request): boolean {
  const secrets = [process.env.HERMES_TRIGGER_SECRET, process.env.CRON_SECRET].filter(Boolean);
  if (secrets.length === 0) return false;
  const auth = request.headers.get("authorization");
  return secrets.some((secret) => auth === `Bearer ${secret}`);
}

function unauthorized() {
  return NextResponse.json(
    { error: "Unauthorized, or the endpoint is disabled. Set HERMES_TRIGGER_SECRET or CRON_SECRET." },
    { status: 401 }
  );
}

export async function GET(request: Request) {
  if (!authorized(request)) return unauthorized();
  const summary = await runAndWriteCouncil();
  return NextResponse.json(summary);
}

export async function POST(request: Request) {
  if (!authorized(request)) return unauthorized();

  let focus: string | undefined;
  try {
    const body = (await request.json()) as { focus?: unknown };
    if (typeof body.focus === "string") focus = body.focus;
  } catch {
    // An empty body is fine.
  }

  const summary = await runAndWriteCouncil(focus);
  return NextResponse.json(summary);
}
