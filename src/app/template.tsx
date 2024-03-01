"use client";

import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import CustomLink from "@/components/ui/custom-link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface TemplateProps {
  children: ReactNode;
}

export default function RootLayout({ children }: TemplateProps) {
  const pathname = usePathname();
  const { setTheme } = useTheme();

  const tabs = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Writing",
      href: "/writing",
    },
    {
      name: "Projects",
      href: "/projects",
    },
  ];

  const contactLink = {
    label: "@marinhomich",
    href: "https://x.com/marinhomich",
    ariaLabel: "twitter profile",
  };

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b  bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <CustomLink href="/" className="mr-6 flex items-center space-x-2">
              <Icons.command className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                marinhomich
              </span>
            </CustomLink>

            <nav className="flex items-center space-x-6 text-sm font-medium">
              {tabs.map(({ name, href }) => (
                <CustomLink
                  key={name}
                  href={href}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === href ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {name}
                </CustomLink>
              ))}
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end  ">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              {/* <CommandMenuSite /> */}
            </div>
            <nav className="flex items-center">
              <Tooltip>
                <TooltipTrigger>
                  <CustomLink href="https://github.com/marinhomich">
                    <div
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "w-9 px-0"
                      )}
                    >
                      <Icons.gitHub className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </div>
                  </CustomLink>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Github</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <CustomLink href="https://x.com/marinhomich">
                    <div
                      className={cn(
                        buttonVariants({
                          variant: "ghost",
                        }),
                        "w-9 px-0"
                      )}
                    >
                      <Icons.x className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </div>
                  </CustomLink>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Twitter</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" className="w-9 px-0">
                    <Icons.sun
                      onClick={() => setTheme("dark")}
                      className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    />
                    <Icons.moon
                      onClick={() => setTheme("light")}
                      className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                    />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle theme</p>
                </TooltipContent>
              </Tooltip>
            </nav>
          </div>
        </div>
      </header>
      <div className="flex-1 flex flex-col ">{children}</div>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-center gap-4  md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose  md:text-left">
            Built by{" "}
            <a
              href={contactLink.href}
              aria-label={contactLink.ariaLabel}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:decoration-primary font-medium underline decoration-secondary decoration-1  underline-offset-2"
            >
              {contactLink.label}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
