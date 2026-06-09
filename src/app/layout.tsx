import type { Metadata, Viewport } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { TabBar } from "@/components/nav/TabBar";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ground Zero",
  description: "The command center across OpenHouse AI, OpenBook, and renewables.",
  applicationName: "Ground Zero",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Ground Zero",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body className="min-h-dvh bg-bg text-ink antialiased">
        <div className="mx-auto flex min-h-dvh w-full max-w-[520px] flex-col">
          <main className="flex-1 pb-28">{children}</main>
          <TabBar />
        </div>
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
