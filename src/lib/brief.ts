import { getStore } from "./vault/store";
import type { Company, Item, ItemState } from "./vault/types";

// Items that belong in the live brief. Rejected and done drop off; snoozed
// items move to the parked count in the footer.
const ACTIVE_STATES: ItemState[] = ["proposed", "approved", "building", "pr_ready"];

export interface BriefView {
  date: string;
  heartbeat?: string;
  summary?: string;
  oneThing?: Item;
  items: Item[];
  highestImpactId?: string;
  parkedCount: number;
  companiesById: Record<string, Company>;
}

export async function getBriefView(): Promise<BriefView> {
  const store = getStore();
  const [items, companies, brief] = await Promise.all([
    store.listItems(),
    store.listCompanies(),
    store.getLatestBrief(),
  ]);

  const companiesById = Object.fromEntries(companies.map((c) => [c.id, c]));

  const active = items
    .filter((item) => ACTIVE_STATES.includes(item.state))
    .sort((a, b) => b.impact - a.impact || a.title.localeCompare(b.title));

  const oneThing = active.find((item) => item.isOneThing);
  const rest = active.filter((item) => item.id !== oneThing?.id);

  return {
    date: brief?.date ?? todayIso(),
    heartbeat: brief?.heartbeat,
    summary: brief?.summary,
    oneThing,
    items: rest,
    highestImpactId: active[0]?.id,
    parkedCount: items.filter((item) => item.state === "snoozed").length,
    companiesById,
  };
}

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}
