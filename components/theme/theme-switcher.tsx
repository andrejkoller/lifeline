"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./use-theme";

export const ThemeSwitcher = () => {
  const { theme, switchTheme, mounted } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === "D") {
        switchTheme();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [switchTheme]);

  if (!mounted) return null;

  return (
    <button
      onClick={switchTheme}
      className="cursor-pointer text-(--color-muted) hover:text-(--color-primary) transition-colors duration-300"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode (Shift + D)`}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};
