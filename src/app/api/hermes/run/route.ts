import { NextResponse } from "next/server";
import { runAndWriteCouncil } from "@/lib/hermes/run";

export const dynamic = "force-dynamic";

// The council routine API, for an external scheduler (a daily cron). Closed by
// default: it only runs when HERMES_TRIGGER_SECRET is set and presented as a
// bearer token. The in-app Run council button uses the server action instead,
// authenticated by the session.
export async function POST(request: Request) {
  const secret = process.env.HERMES_TRIGGER_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "Set HERMES_TRIGGER_SECRET to enable this endpoint." },
      { status: 401 }
    );
  }
  if (request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

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
