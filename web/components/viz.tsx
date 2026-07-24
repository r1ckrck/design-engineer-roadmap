// The illustration kit. Small, composable diagram primitives styled from design tokens,
// so every day's visual reads as one system and themes for light/dark automatically.
// Built from styled HTML (not hand-placed SVG) so layouts arrange themselves and can't
// drift out of alignment. Each Diagram is announced to screen readers via its label.

import type { ReactNode } from "react";

// The frame every visual sits in: a titled, captioned panel in the design language.
export function Diagram({
  label,
  caption,
  children,
}: {
  label: string;
  caption?: string;
  children: ReactNode;
}) {
  return (
    <figure
      role="img"
      aria-label={label}
      className="rounded-md border border-border bg-surface/40 p-4"
    >
      <div className="font-mono text-[11px] uppercase tracking-wide text-muted">{label}</div>
      <div className="mt-3">{children}</div>
      {caption && <figcaption className="mt-3 text-xs leading-snug text-muted">{caption}</figcaption>}
    </figure>
  );
}

type Item = { label: string; sub?: string };

function Chip({ label, sub, accent }: Item & { accent?: boolean }) {
  return (
    <div className={`rounded-sm border bg-bg px-3 py-2 ${accent ? "border-accent/50" : "border-border"}`}>
      <div className="text-sm font-medium text-fg">{label}</div>
      {sub && <div className="text-xs text-muted">{sub}</div>}
    </div>
  );
}

// A vertical process — chips joined by connectors. For step-by-step days.
export function FlowSteps({ steps }: { steps: Item[] }) {
  return (
    <ol className="flex flex-col">
      {steps.map((step, i) => (
        <li key={i} className="flex flex-col items-stretch">
          <Chip {...step} />
          {i < steps.length - 1 && <span aria-hidden className="mx-auto h-4 w-px bg-border" />}
        </li>
      ))}
    </ol>
  );
}

// Layered horizontal slabs, top to bottom. For "layers" concepts (context tiers, a stack).
export function StackDiagram({ layers }: { layers: Item[] }) {
  return (
    <div className="space-y-1">
      {layers.map((layer, i) => (
        <Chip key={i} {...layer} />
      ))}
    </div>
  );
}

// A root with branches beneath it. For the router pattern, trees, one-to-many relations.
export function BranchDiagram({ root, branches }: { root: string; branches: string[] }) {
  return (
    <div>
      <Chip label={root} accent />
      <div className="ml-4 mt-1 space-y-1 border-l border-border pl-3">
        {branches.map((branch, i) => (
          <div key={i} className="rounded-sm border border-border bg-bg px-3 py-1.5 text-xs text-fg/90">
            {branch}
          </div>
        ))}
      </div>
    </div>
  );
}

// A monospace file/folder tree from a preformatted string. For folder-architecture days.
export function FileTree({ tree }: { tree: string }) {
  return (
    <pre className="overflow-x-auto rounded-sm border border-border bg-bg p-3 font-mono text-xs leading-relaxed text-fg/90">
      {tree}
    </pre>
  );
}

// Dots along a line. For git history, the journey, ordered progress.
export function Timeline({ points }: { points: Item[] }) {
  return (
    <div className="relative flex items-start justify-between gap-2">
      <span aria-hidden className="absolute left-1 right-1 top-1 h-px bg-border" />
      {points.map((point, i) => (
        <div key={i} className="relative flex-1 text-center">
          <span aria-hidden className="mx-auto mb-2 block h-2 w-2 rounded-full bg-accent" />
          <div className="text-xs font-medium text-fg">{point.label}</div>
          {point.sub && <div className="text-[11px] text-muted">{point.sub}</div>}
        </div>
      ))}
    </div>
  );
}

// A compact comparison table. For "this vs that" and reference days.
export function MiniTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <table className="w-full text-left text-xs">
      <thead>
        <tr>
          {head.map((cell, i) => (
            <th key={i} className="border-b border-border pb-1 pr-3 font-mono uppercase tracking-wide text-muted">
              {cell}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, r) => (
          <tr key={r}>
            {row.map((cell, c) => (
              <td key={c} className="border-b border-border/50 py-1.5 pr-3 align-top text-fg/90">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// A short list of labeled points. For "key ideas" summaries.
export function KeyPoints({ points }: { points: Item[] }) {
  return (
    <ul className="space-y-2">
      {points.map((point, i) => (
        <li key={i} className="flex gap-2">
          <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <div>
            <div className="text-sm font-medium text-fg">{point.label}</div>
            {point.sub && <div className="text-xs text-muted">{point.sub}</div>}
          </div>
        </li>
      ))}
    </ul>
  );
}
