"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { search, type SearchHit } from "@/lib/search-index";
import { SearchIcon } from "./icons";

export function Search() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const results = useMemo(() => search(query), [query]);

  const go = (hit: SearchHit) => {
    setOpen(false);
    setQuery("");
    router.push(`/day/${hit.dayId}${hit.stepAnchor ? `#${hit.stepAnchor}` : ""}`);
  };

  // Portalled to <body> so the backdrop escapes the header's backdrop-blur containing block
  // and covers the whole viewport — clicking anywhere outside the box closes it.
  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 pt-[10vh]"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-label="Search"
        className="w-full max-w-lg overflow-hidden rounded-lg border border-border bg-bg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search days and steps…"
          aria-label="Search query"
          className="w-full border-b border-border bg-transparent px-4 py-3 text-fg outline-none placeholder:text-muted"
        />
        <ul className="max-h-80 overflow-y-auto">
          {query && results.length === 0 && (
            <li className="px-4 py-3 text-sm text-muted">No matches.</li>
          )}
          {results.map((hit, i) => (
            <li key={`${hit.dayId}-${hit.stepAnchor ?? "day"}-${i}`}>
              <button
                type="button"
                onClick={() => go(hit)}
                className="flex w-full flex-col items-start gap-0.5 px-4 py-2 text-left hover:bg-surface"
              >
                <span className="text-sm text-fg">{hit.label}</span>
                <span className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  {hit.phaseTitle} · Day {hit.dayId}
                  {hit.kind === "step" ? " · step" : ""}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search"
        className="p-1 text-lg text-muted hover:text-fg"
      >
        <SearchIcon />
      </button>
      {open && mounted ? createPortal(modal, document.body) : null}
    </>
  );
}
