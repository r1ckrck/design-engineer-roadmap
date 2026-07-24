"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const KEY = "der-theme";

// Reads/toggles the theme applied to <html data-theme>. Default is dark (set on the
// server and by the no-FOUC script in layout); this hook only flips and persists.
export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem(KEY, next);
      return next;
    });
  };

  return { theme, toggle };
}
