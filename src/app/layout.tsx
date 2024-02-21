import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/utils/cn";
import ThemeProvider from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/footer";
import Container from "@/components/container";

export const metadata: Metadata = {
  title: "Michel Marinho",
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
          <Container>{children}</Container>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
