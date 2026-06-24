import type { Company, LaunchBrief } from "@/lib/vault/types";
import { Tag } from "@/components/ui/Tag";

export function LaunchCard({
  launch,
  company,
}: {
  launch: LaunchBrief;
  company?: Company;
}) {
  return (
    <article className="rounded-card border border-gold/60 bg-surface p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {company && <Tag tone="ink">{company.short ?? company.name}</Tag>}
          <Tag>Launch kit</Tag>
          <Tag tone="ink">{launch.mode === "dry-run" ? "Dry run" : "Live"}</Tag>
        </div>
        <span className="text-[12px] text-muted">{launch.updatedAt?.slice(0, 10) ?? launch.date}</span>
      </div>

      <h3 className="mt-3.5 text-[17px] font-medium leading-snug text-ink">{launch.title}</h3>
      {(launch.summary || launch.thesis) && (
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{launch.summary || launch.thesis}</p>
      )}

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Field label="Buyer" value={launch.buyer} />
        <Field label="Wedge" value={launch.wedge} />
        <Field label="Offer" value={launch.offer} />
        <Field label="Validation" value={launch.validationTest} />
      </div>

      {Boolean(launch.landingHeadline || launch.landingSubhead || launch.landingPoints?.length) && (
        <Section title="Landing page">
          {launch.landingHeadline && <p className="text-[13px] font-medium text-ink">{launch.landingHeadline}</p>}
          {launch.landingSubhead && <p className="mt-1 text-[13px] leading-relaxed text-muted">{launch.landingSubhead}</p>}
          {launch.landingPoints?.length ? (
            <ul className="mt-2 space-y-1 text-[13px] leading-relaxed text-muted">
              {launch.landingPoints.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          ) : null}
          {launch.landingCta && <p className="mt-2 text-[12px] text-gold">CTA: {launch.landingCta}</p>}
        </Section>
      )}

      {launch.outreachMessage && (
        <Section title="Outreach">
          <p className="text-[13px] leading-relaxed text-muted">{launch.outreachMessage}</p>
        </Section>
      )}

      {launch.followUpMessage && (
        <Section title="Follow-up">
          <p className="text-[13px] leading-relaxed text-muted">{launch.followUpMessage}</p>
        </Section>
      )}

      {launch.qualificationQuestions?.length ? (
        <Section title="Qualification questions">
          <ul className="space-y-1 text-[13px] leading-relaxed text-muted">
            {launch.qualificationQuestions.map((question) => (
              <li key={question}>• {question}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      {launch.signalCapture && (
        <Section title="Signal capture">
          <p className="text-[13px] leading-relaxed text-muted">{launch.signalCapture}</p>
        </Section>
      )}

      <div className="mt-4 border-t border-hairline pt-3.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">Next step</p>
        <p className="mt-1 text-[13px] leading-relaxed text-muted">{launch.nextStep}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {launch.approvalGates.map((gate) => (
          <Tag key={gate}>{gate}</Tag>
        ))}
        {launch.signalMetrics.map((metric) => (
          <Tag tone="ink" key={metric}>
            {metric}
          </Tag>
        ))}
      </div>

      {launch.heartbeat && (
        <p className="mt-4 text-[12.5px] text-muted">{launch.heartbeat}</p>
      )}
    </article>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-hairline bg-bg/70 px-3 py-2">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold">{label}</p>
      <p className="mt-1 text-[12.5px] leading-relaxed text-muted">{value || "Not yet set"}</p>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-4 rounded-2xl border border-hairline bg-bg/60 px-3 py-2.5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold">{title}</p>
      <div className="mt-1.5">{children}</div>
    </section>
  );
}
