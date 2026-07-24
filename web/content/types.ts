// The content model. The website renders from this data, not from markdown.

export type OS = "mac" | "windows";

export type Block =
  | { type: "text"; md: string }
  | {
      type: "copyable";
      kind: "prompt" | "command" | "url";
      label: string;
      text: string;
      // For commands: pin the terminal when it matters (e.g. the PowerShell install).
      runIn?: "terminal" | "powershell";
    }
  | { type: "disclosure"; summary: string; body: Block[] }
  | { type: "callout"; kind: "tip" | "note" | "important"; body: string }
  | { type: "ostabs"; mac: Block[]; windows: Block[] };

export interface Step {
  n: number;
  title: string;
  body: Block[];
}

export interface Day {
  id: number; // 1..28
  phaseId: number; // 0..10
  title: string;
  goal?: string;
  estMinutes?: number;
  outcome?: string; // "what you'll have by the end"
  setup?: string;
  steps?: Step[];
  recap?: string;
}

export interface Phase {
  id: number; // 0..10
  title: string;
  focus: string;
  arc: "foundations" | "engineering";
  dayIds: number[];
  mapFirst?: string[];
}

export interface Course {
  title: string;
  tagline: string;
  phases: Phase[];
}
