"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";
import { TooltipProvider } from "./ui/tooltip";

interface ProvidersProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ProvidersProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
    </NextThemesProvider>
  );
}
