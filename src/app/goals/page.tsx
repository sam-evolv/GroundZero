import { getGoalsView } from "@/lib/goals";
import { LogoMark } from "@/components/ui/LogoMark";

// Read live from the vault on every request.
export const dynamic = "force-dynamic";

export default async function GoalsPage() {
  const groups = await getGoalsView();

  return (
    <div className="px-5 pt-9">
      <div className="flex items-center gap-2.5">
        <LogoMark size={26} />
        <span className="text-[13px] font-medium tracking-[0.04em] text-ink/70">Ground Zero</span>
      </div>

      <h1 className="mt-6 font-serif text-[34px] font-normal leading-[1.05] text-ink">
        Goals and state
      </h1>
      <p className="mt-2 text-[13px] text-muted">Active this month, by company.</p>

      <div className="mt-8 space-y-8">
        {groups.map((group) => (
          <section key={group.company.id}>
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="text-[15px] font-semibold text-ink">{group.company.name}</h2>
              {group.company.sector && (
                <span className="text-[11px] text-muted">{group.company.sector}</span>
              )}
            </div>

            {group.state && (
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{group.state.headline}</p>
            )}

            <div className="mt-3.5 space-y-2.5">
              {group.goals.map((goal) => (
                <div key={goal.id} className="rounded-card border border-hairline bg-surface p-4">
                  <p className="text-[14px] leading-snug text-ink">{goal.title}</p>
                  {goal.metric && <p className="mt-1 text-[12.5px] text-muted">{goal.metric}</p>}
                </div>
              ))}
              {group.goals.length === 0 && (
                <p className="text-[13px] text-muted">No active goals this month.</p>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
