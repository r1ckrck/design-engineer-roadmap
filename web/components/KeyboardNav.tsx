"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Left/right arrow keys move between days. Ignored while typing (so search is unaffected).
export function KeyboardNav({ prev, next }: { prev: number | null; next: number | null }) {
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)) {
        return;
      }
      if (e.key === "ArrowLeft" && prev) router.push(`/day/${prev}`);
      if (e.key === "ArrowRight" && next) router.push(`/day/${next}`);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, router]);

  return null;
}
