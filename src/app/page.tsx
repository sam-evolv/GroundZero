import { getBriefView } from "@/lib/brief";
import { getLaunchView } from "@/lib/launch";
import { BriefHeader } from "@/components/brief/BriefHeader";
import { BriefFooter } from "@/components/brief/BriefFooter";
import { ItemCard } from "@/components/brief/ItemCard";
import { LaunchCard } from "@/components/brief/LaunchCard";
import { HermesControls } from "@/components/brief/HermesControls";
import { Eyebrow } from "@/components/ui/Eyebrow";

// Read live from the vault on every request.
export const dynamic = "force-dynamic";

export default async function Home() {
  const [view, launchView] = await Promise.all([getBriefView(), getLaunchView()]);
  const hasItems = Boolean(view.oneThing) || view.items.length > 0;

  return (
    <div className="px-5 pt-9">
      <BriefHeader date={view.date} heartbeat={view.heartbeat} summary={view.summary} />

      <div className="mt-6">
        <HermesControls />
      </div>

      {launchView.latestLaunch && (
        <section className="mt-8 space-y-3">
          <Eyebrow>Launch loop</Eyebrow>
          <LaunchCard
            launch={launchView.latestLaunch}
            company={view.companiesById[launchView.latestLaunch.companyId]}
          />
        </section>
      )}

      <section className="mt-8 rounded-card border border-hairline bg-surface p-5">
        <Eyebrow>Signal dashboard</Eyebrow>
        <div className="mt-3 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-[18px] font-medium text-ink">Recent market signals</h2>
            <p className="mt-1 text-[13px] leading-relaxed text-muted">
              Replies, pilots, objections, and revenue are the evidence trail the launch loop learns from.
            </p>
          </div>
          <span className="rounded-full border border-hairline px-3 py-1 text-[12px] text-muted">
            {launchView.recentSignals.length} recent
          </span>
        </div>

        <div className="mt-4 space-y-3">
          {launchView.recentSignals.length > 0 ? (
            launchView.recentSignals.map((signal) => (
              <article key={signal.id} className="rounded-2xl border border-hairline bg-bg p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-gold/15 px-2 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-gold">
                      {signal.signalType}
                    </span>
                    <span className="text-[12px] text-muted">{signal.createdAt.slice(0, 10)}</span>
                  </div>
                  <span className="text-[12px] text-muted">
                    {view.companiesById[signal.companyId]?.short ?? view.companiesById[signal.companyId]?.name ?? signal.companyId}
                  </span>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-ink">{signal.note}</p>
              </article>
            ))
          ) : (
            <p className="text-[13px] text-muted">No signals logged yet. The first reply, objection, or pilot request will appear here.</p>
          )}
        </div>
      </section>

      {view.oneThing && (
        <section className="mt-8">
          <Eyebrow>The one thing</Eyebrow>
          <ItemCard
            item={view.oneThing}
            company={view.companiesById[view.oneThing.companyId]}
            highlight={view.oneThing.id === view.highestImpactId}
          />
        </section>
      )}

      {view.items.length > 0 && (
        <section className="mt-8">
          <Eyebrow>Ranked by impact</Eyebrow>
          <div className="space-y-3.5">
            {view.items.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                company={view.companiesById[item.companyId]}
                highlight={item.id === view.highestImpactId}
              />
            ))}
          </div>
        </section>
      )}

      {!hasItems && (
        <p className="mt-10 text-[14px] leading-relaxed text-muted">
          No items in the brief yet. The next council run will fill this in.
        </p>
      )}

      <BriefFooter parkedCount={view.parkedCount} />
    </div>
  );
}
