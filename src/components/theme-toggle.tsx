"use client";
import { useTheme } from "next-themes";
import { Icons } from "./icons";
import { cn } from "@/utils/cn";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <div className={cn("w-9 px-0 hover:cursor-pointer")}>
        {theme === "dark" ? (
          <Icons.moon onClick={() => setTheme("light")} className="h-5 w-5" />
        ) : (
          <Icons.sun onClick={() => setTheme("dark")} className="h-5 w-5" />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
