import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://marinhomich.dev"),
  title: {
    default: "Michel Marinho",
    template: "%s | Michel Marinho",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://marinhomich.dev",
    title: "Michel Marinho",
    description: "Developer, writer, and creator.",
    siteName: "Michel Marinho",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "Michel Marinho",
    description: "Developer, writer, and creator.",
    creator: "@marinhomich",
  },
  manifest: `https://marinhomich.dev/manifest.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
