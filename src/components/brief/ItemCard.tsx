import type { Company, Item } from "@/lib/vault/types";
import { Tag } from "@/components/ui/Tag";
import { StatePill } from "@/components/ui/StatePill";
import { ItemActions } from "./ItemActions";

export function ItemCard({
  item,
  company,
  highlight = false,
}: {
  item: Item;
  company?: Company;
  highlight?: boolean;
}) {
  return (
    <article
      className={`rounded-card bg-surface p-5 ${
        highlight ? "border-[1.5px] border-gold" : "border border-hairline"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {company && <Tag tone="ink">{company.short ?? company.name}</Tag>}
          {item.domain && <Tag>{capitalize(item.domain)}</Tag>}
        </div>
        <StatePill state={item.state} />
      </div>

      <h3 className="mt-3.5 text-[17px] font-medium leading-snug text-ink">{item.title}</h3>
      {item.rationale && (
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{item.rationale}</p>
      )}

      {item.councilNote && (
        <div className="mt-3.5 flex items-center gap-2 border-t border-hairline pt-3.5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
            Council
          </span>
          <span className="text-[12.5px] text-muted">{item.councilNote}</span>
        </div>
      )}

      <ItemActions item={item} />
    </article>
  );
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
