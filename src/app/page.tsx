import { getBriefView } from "@/lib/brief";
import { BriefHeader } from "@/components/brief/BriefHeader";
import { BriefFooter } from "@/components/brief/BriefFooter";
import { ItemCard } from "@/components/brief/ItemCard";
import { Eyebrow } from "@/components/ui/Eyebrow";

// Read live from the vault on every request.
export const dynamic = "force-dynamic";

export default async function Home() {
  const view = await getBriefView();
  const hasItems = Boolean(view.oneThing) || view.items.length > 0;

  return (
    <div className="px-5 pt-9">
      <BriefHeader date={view.date} heartbeat={view.heartbeat} />

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
