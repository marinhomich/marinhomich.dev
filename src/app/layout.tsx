import type { Metadata } from "next";
import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/utils/cn";
import ThemeProvider from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://marinhomich.dev"),
  title: {
    default: "Michel Marinho",
    template: "%s | Michel Marinho",
  },
  description:
    "Hi there I'm Michel Marinho. I'm a Front-end Engineer based in Brazil. A young Frontend developer who wants to share his knowledge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <ThemeProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
