import { getStore } from "@/lib/vault/store";
import type { Company, LaunchBrief } from "@/lib/vault/types";

export interface LaunchView {
  date: string;
  latestLaunch: LaunchBrief | null;
  companiesById: Record<string, Company>;
}

export async function getLaunchView(): Promise<LaunchView> {
  const store = getStore();
  const [companies, latestLaunch] = await Promise.all([store.listCompanies(), store.getLatestLaunch()]);

  return {
    date: latestLaunch?.date ?? todayIso(),
    latestLaunch,
    companiesById: Object.fromEntries(companies.map((company) => [company.id, company])),
  };
}

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}
