import type { Block, Day } from "@/content/types";

// Turns a Day from the content model into a markdown document a learner can download —
// to read offline or paste into Claude Code. Pure and deterministic so it can be tested.

function blocksToMarkdown(blocks: Block[]): string {
  return blocks.map(blockToMarkdown).join("\n\n");
}

function blockToMarkdown(block: Block): string {
  switch (block.type) {
    case "text":
      return block.md;
    case "copyable":
      return `**${block.label}**\n\n\`\`\`\n${block.text}\n\`\`\``;
    case "callout":
      return `> **${capitalize(block.kind)}:** ${block.body}`;
    case "disclosure":
      return `**${block.summary}**\n\n${blocksToMarkdown(block.body)}`;
    case "ostabs":
      return [
        `**macOS**`,
        blocksToMarkdown(block.mac),
        `**Windows**`,
        blocksToMarkdown(block.windows),
      ].join("\n\n");
  }
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function dayToMarkdown(day: Day): string {
  const parts: string[] = [`# Day ${day.id}: ${day.title}`];

  if (day.goal) parts.push(`**Goal:** ${day.goal}`);
  if (day.outcome) parts.push(`**By the end:** ${day.outcome}`);
  if (day.setup) parts.push(`**Setup:** ${day.setup}`);

  for (const step of day.steps ?? []) {
    parts.push(`## ${step.n}. ${step.title}`);
    parts.push(blocksToMarkdown(step.body));
  }

  if (day.recap) parts.push(`**Recap:** ${day.recap}`);

  return `${parts.join("\n\n")}\n`;
}

// Browser-only: build a Blob from the markdown and trigger a download.
export function downloadDay(day: Day): void {
  const markdown = dayToMarkdown(day);
  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `day-${String(day.id).padStart(2, "0")}.md`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}
