import { getStore } from "@/lib/vault/store";
import type { Company, LaunchBrief, LaunchSignal } from "@/lib/vault/types";

export interface LaunchView {
  date: string;
  latestLaunch: LaunchBrief | null;
  recentSignals: LaunchSignal[];
  companiesById: Record<string, Company>;
}

export interface LaunchDetailView {
  launch: LaunchBrief | null;
  company: Company | null;
  companiesById: Record<string, Company>;
}

export async function getLaunchView(): Promise<LaunchView> {
  const store = getStore();
  const [companies, latestLaunch, recentSignals] = await Promise.all([
    store.listCompanies(),
    store.getLatestLaunch(),
    store.listLaunchSignals(),
  ]);

  return {
    date: latestLaunch?.date ?? todayIso(),
    latestLaunch,
    recentSignals: recentSignals.slice(0, 5),
    companiesById: Object.fromEntries(companies.map((company) => [company.id, company])),
  };
}

export async function getLaunchById(id: string): Promise<LaunchDetailView> {
  const store = getStore();
  const [companies, launches] = await Promise.all([store.listCompanies(), store.listLaunches()]);
  const launch = launches.find((entry) => entry.id === id) ?? null;
  const companiesById = Object.fromEntries(companies.map((company) => [company.id, company]));
  return {
    launch,
    company: launch ? companiesById[launch.companyId] ?? null : null,
    companiesById,
  };
}

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}
