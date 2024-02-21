"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { Icons } from "./icons";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const pathname = usePathname();

  const tabs = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Articles",
      href: "/articles",
    },
    {
      name: "Projects",
      href: "/projects",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b  bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.command className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              marinhomich
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {tabs.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* <CommandMenuSite /> */}
          </div>
          <nav className="flex items-center">
            <Link
              href={"https://github.com/marinhomich"}
              target="_blank"
              rel="noreferrer"
            >
              <div className={cn("w-9 px-0")}>
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
