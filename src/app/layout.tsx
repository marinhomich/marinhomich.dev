import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/utils/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_APP_DOMAIN}`),
  title: {
    default: process.env.NEXT_PUBLIC_APP_NAME!,
    template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME}`,
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
    title: process.env.NEXT_PUBLIC_APP_NAME,
    description: "Developer, writer, and creator.",
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: process.env.NEXT_PUBLIC_APP_NAME,
    description: "Developer, writer, and creator.",
    creator: "@marinhomich",
  },
  manifest: `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}/manifest.webmanifest`,
};

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-[#00fedc1d] selection:text-[#51ffd9dc]",
          fontSans.variable
        )}
      >
        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
