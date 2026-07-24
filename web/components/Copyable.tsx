"use client";

import { useState } from "react";
import { highlight } from "sugar-high";
import { useOS } from "@/lib/os-context";
import { commandLabel } from "@/lib/command-label";

export function Copyable({
  kind,
  label,
  text,
  runIn,
}: {
  kind: "prompt" | "command" | "url";
  label: string;
  text: string;
  runIn?: "terminal" | "powershell";
}) {
  const { os } = useOS();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  // Commands get an OS-aware label and syntax highlighting; prompts stay plain (natural language).
  const displayLabel = kind === "command" ? commandLabel(os, runIn, label) : label;

  return (
    <div className="my-3 overflow-hidden rounded-md border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border px-3 py-1.5">
        <span className="font-mono text-xs uppercase tracking-wide text-muted">{displayLabel}</span>
        <button
          onClick={copy}
          className="rounded px-2 py-0.5 text-xs font-medium text-accent hover:bg-accent/10"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto px-3 py-2.5">
        {kind === "command" ? (
          <code
            className="font-mono text-sm"
            dangerouslySetInnerHTML={{ __html: highlight(text) }}
          />
        ) : (
          <code className="font-mono text-sm text-fg">{text}</code>
        )}
      </pre>
    </div>
  );
}
