import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { authConfigured, checkPasscode, expectedToken, sessionCookieName } from "@/lib/auth";
import { LogoMark } from "@/components/ui/LogoMark";

export const dynamic = "force-dynamic";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  async function signIn(formData: FormData) {
    "use server";
    const passcode = String(formData.get("passcode") ?? "");
    if (!authConfigured() || !checkPasscode(passcode)) {
      redirect("/login?error=1");
    }
    const store = await cookies();
    store.set(sessionCookieName(), expectedToken(), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
    redirect("/");
  }

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6">
      <LogoMark size={40} />
      <h1 className="mt-5 font-serif text-[26px] text-ink">Ground Zero</h1>
      <p className="mt-1 text-[13px] text-muted">Enter your passcode.</p>

      <form action={signIn} className="mt-6 w-full max-w-[300px]">
        <input
          name="passcode"
          type="password"
          autoFocus
          autoComplete="current-password"
          placeholder="Passcode"
          className="w-full rounded-full border border-hairline bg-surface px-4 py-3 text-[15px] text-ink outline-none placeholder:text-muted focus:border-gold"
        />
        {error && (
          <p className="mt-2 text-center text-[12.5px] text-amber">That passcode did not match.</p>
        )}
        <button
          type="submit"
          className="mt-3 w-full rounded-full bg-gold px-4 py-3 text-[14px] font-medium text-bg"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
