import { Diagram, Timeline, MiniTable } from "@/components/viz";

export default function Day04Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="Your first commits"
        caption="Each command moves you one step along the project's timeline."
      >
        <Timeline
          points={[
            { label: "init", sub: "start tracking" },
            { label: "add", sub: "stage changes" },
            { label: "commit", sub: "save snapshot" },
            { label: "log", sub: "read history" },
          ]}
        />
      </Diagram>

      <Diagram
        label="Undo: a reference"
        caption="Not a drill — reach for these only when you need them."
      >
        <MiniTable
          head={["Situation", "Command"]}
          rows={[
            ["Discard unsaved changes", "git restore <file>"],
            ["Unstage, keep changes", "git restore --staged <file>"],
            ["Fix last commit message", 'git commit --amend -m "new"'],
            ["See full history", "git log"],
          ]}
        />
      </Diagram>
    </div>
  );
}
