"use client";

import { useState } from "react";
import { glossary } from "@/content/glossary";

// A jargon term with a hover/focus definition — progressive disclosure, keyboard-reachable.
export function Tooltip({ term, children }: { term: string; children: React.ReactNode }) {
  const definition = glossary[term.toLowerCase()];
  const [open, setOpen] = useState(false);

  if (!definition) return <>{children}</>;

  return (
    <span className="relative inline-block">
      <span
        tabIndex={0}
        role="button"
        aria-describedby={open ? `tt-${term}` : undefined}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="cursor-help border-b border-dotted border-muted"
      >
        {children}
      </span>
      {open && (
        <span
          id={`tt-${term}`}
          role="tooltip"
          className="absolute bottom-full left-0 z-30 mb-1 w-64 rounded-md border border-border bg-bg p-2 text-xs font-normal leading-snug text-fg shadow-lg"
        >
          {definition}
        </span>
      )}
    </span>
  );
}
