import { getStore } from "@/lib/vault/store";
import type { Company } from "@/lib/vault/types";

export interface CouncilContext {
  date: string;
  companyIds: string[];
  companiesById: Record<string, Company>;
  // A single readable brief of everything the council should know, assembled
  // from the vault. This is the "full context from the obsidian vault".
  briefingText: string;
}

// Pulls the whole vault into one context document the council reasons over:
// companies, active goals, current state, what is already on the board, and the
// recent decisions so it does not re-propose rejected or snoozed ideas.
export async function buildCouncilContext(): Promise<CouncilContext> {
  const store = getStore();
  const [companies, goals, states, items] = await Promise.all([
    store.listCompanies(),
    store.listGoals(),
    store.listProjectState(),
    store.listItems(),
  ]);

  const companiesById = Object.fromEntries(companies.map((c) => [c.id, c]));
  const date = new Date().toISOString().slice(0, 10);

  const sections = companies.map((company) => {
    const state = states.find((s) => s.companyId === company.id && s.valid);
    const companyGoals = goals.filter(
      (g) => g.companyId === company.id && g.status === "active"
    );
    const onBoard = items.filter(
      (i) => i.companyId === company.id && i.state !== "rejected" && i.state !== "done"
    );
    const setAside = items.filter(
      (i) => i.companyId === company.id && i.state === "rejected"
    );

    const lines: string[] = [`## ${company.name} (id: ${company.id})`];
    if (company.sector) lines.push(`Sector: ${company.sector}`);
    if (state) lines.push(`Current state: ${state.headline}`);
    if (state?.detail) lines.push(state.detail);

    if (companyGoals.length > 0) {
      lines.push("Active goals:");
      for (const goal of companyGoals) {
        lines.push(`- ${goal.title}${goal.metric ? ` (${goal.metric})` : ""}`);
      }
    }

    if (onBoard.length > 0) {
      lines.push("Already on the board (do not duplicate these):");
      for (const item of onBoard) {
        lines.push(`- [${item.state}] ${item.title}`);
      }
    }

    if (setAside.length > 0) {
      lines.push("Previously set aside, do not re-propose these:");
      for (const item of setAside) {
        lines.push(`- ${item.title}`);
      }
    }

    return lines.join("\n");
  });

  return {
    date,
    companyIds: companies.map((c) => c.id),
    companiesById,
    briefingText: sections.join("\n\n"),
  };
}
