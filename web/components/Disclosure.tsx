"use client";

import { useState } from "react";
import type { Block } from "@/content/types";
import { Blocks } from "./BlockRenderer";

export function Disclosure({ summary, body }: { summary: string; body: Block[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-3">
      <button
        onClick={() => setOpen(!open)}
        className="text-sm font-medium text-accent hover:underline"
      >
        {open ? "▾" : "▸"} {summary}
      </button>
      {open && (
        <div className="mt-2 space-y-3 border-l-2 border-border pl-4">
          <Blocks blocks={body} />
        </div>
      )}
    </div>
  );
}
