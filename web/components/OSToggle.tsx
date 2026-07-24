"use client";

import { useOS } from "@/lib/os-context";
import { segmentedTab } from "@/lib/segmented";

const tab = (active: boolean) => `px-2.5 py-1 font-mono ${segmentedTab(active)}`;

// The macOS / Windows switch. Lives in the header; the choice is global (os-context).
export function OSToggle() {
  const { os, setOS } = useOS();

  return (
    <div
      role="group"
      aria-label="Operating system"
      className="flex overflow-hidden rounded-sm border border-border text-xs"
    >
      <button type="button" aria-pressed={os === "mac"} onClick={() => setOS("mac")} className={tab(os === "mac")}>
        macOS
      </button>
      <button
        type="button"
        aria-pressed={os === "windows"}
        onClick={() => setOS("windows")}
        className={tab(os === "windows")}
      >
        Windows
      </button>
    </div>
  );
}
