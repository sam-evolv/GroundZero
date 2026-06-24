import Link from "next/link";
import { notFound } from "next/navigation";
import { LaunchCard } from "@/components/brief/LaunchCard";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LaunchSharePanel } from "@/components/launch/LaunchSharePanel";
import { LaunchSignalForm } from "@/components/launch/LaunchSignalForm";
import { getLaunchById } from "@/lib/launch";

export const dynamic = "force-dynamic";

export default async function LaunchPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const view = await getLaunchById(id);
  if (!view.launch) notFound();

  return (
    <main className="px-5 pt-9 pb-16">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <Eyebrow>Launch page</Eyebrow>
          <h1 className="mt-2 text-[28px] font-semibold leading-tight text-ink">{view.launch.title}</h1>
        </div>
        <Link href="/" className="text-[13px] font-medium text-gold underline decoration-gold/40 underline-offset-2">
          Back to brief
        </Link>
      </div>

      <div className="space-y-4">
        <LaunchCard launch={view.launch} company={view.company ?? undefined} />
        <LaunchSharePanel launch={view.launch} />
        <LaunchSignalForm launch={view.launch} />
      </div>
    </main>
  );
}
