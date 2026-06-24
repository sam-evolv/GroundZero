import { redirect } from "next/navigation";
import { getLaunchView } from "@/lib/launch";

export const dynamic = "force-dynamic";

export default async function LaunchIndexPage() {
  const view = await getLaunchView();
  if (!view.latestLaunch) {
    redirect("/");
  }
  redirect(`/launch/${view.latestLaunch.id}`);
}
