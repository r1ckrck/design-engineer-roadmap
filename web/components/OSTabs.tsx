"use client";

import type { Block } from "@/content/types";
import { useOS } from "@/lib/os-context";
import { segmentedTab } from "@/lib/segmented";
import { Blocks } from "./BlockRenderer";

const tab = (active: boolean) =>
  `px-4 py-2 text-sm ${active ? "font-medium " : ""}${segmentedTab(active)}`;

export function OSTabs({ mac, windows }: { mac: Block[]; windows: Block[] }) {
  const { os, setOS } = useOS();

  return (
    <div className="my-3 overflow-hidden rounded-lg border border-border">
      <div className="flex border-b border-border">
        <button onClick={() => setOS("mac")} className={tab(os === "mac")}>
          macOS
        </button>
        <button onClick={() => setOS("windows")} className={tab(os === "windows")}>
          Windows
        </button>
      </div>
      <div className="space-y-3 p-4">
        <Blocks blocks={os === "mac" ? mac : windows} />
      </div>
    </div>
  );
}
