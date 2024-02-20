import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/utils/cn";
import ThemeProvider from "@/components/theme-provider";

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
    <html
      lang="en"
      className={cn(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
