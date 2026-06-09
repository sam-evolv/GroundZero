import { getStore } from "./vault/store";
import type { Company, Goal, ProjectState } from "./vault/types";

export interface CompanyGroup {
  company: Company;
  state?: ProjectState;
  goals: Goal[];
}

export async function getGoalsView(): Promise<CompanyGroup[]> {
  const store = getStore();
  const [companies, goals, states] = await Promise.all([
    store.listCompanies(),
    store.listGoals(),
    store.listProjectState(),
  ]);

  const currentMonth = new Date().toISOString().slice(0, 7);

  return companies.map((company) => ({
    company,
    state: states.find((s) => s.companyId === company.id && s.valid),
    goals: goals
      .filter(
        (goal) =>
          goal.companyId === company.id &&
          goal.status === "active" &&
          isCurrentPeriod(goal.period, currentMonth)
      )
      .sort((a, b) => a.title.localeCompare(b.title)),
  }));
}

// Keep current-month goals and any goal not tagged to a specific month. Only a
// goal explicitly tagged to a different YYYY-MM is filtered out.
function isCurrentPeriod(period: string | undefined, currentMonth: string): boolean {
  if (!period) return true;
  if (!/^\d{4}-\d{2}$/.test(period)) return true;
  return period === currentMonth;
}
