import { Diagram, KeyPoints, MiniTable } from "@/components/viz";

// Day 1 visual: the four-tool workbench, then the install-and-verify checkpoint.
export default function Day01Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="The four-tool workbench"
        caption="Each tool has one job; understanding arrives as you use them."
      >
        <KeyPoints
          points={[
            { label: "Editor", sub: "where you see and organize files" },
            { label: "Node", sub: "runs the sites and tools you build" },
            { label: "Claude Code", sub: "writes and edits code on your direction" },
            { label: "Git", sub: "tracks every change and backs work up" },
          ]}
        />
      </Diagram>

      <Diagram
        label="Confirm it works"
        caption="Each command should print a version, not an error."
      >
        <MiniTable
          head={["Run", "Proves"]}
          rows={[
            ["node --version", "Node installed"],
            ["git --version", "Git installed"],
            ["claude --version", "Claude Code installed"],
          ]}
        />
      </Diagram>
    </div>
  );
}
