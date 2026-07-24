import { Diagram, MiniTable, StackDiagram } from "@/components/viz";

// Exemplar visual. Every day's visual is a default-exported component that composes the
// viz kit inside one or more Diagram frames. Keep to 1-2 diagrams; calm over dense.
export default function Day09Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="Three tiers of context"
        caption="Each tier answers a different question; none repeats another."
      >
        <StackDiagram
          layers={[
            { label: "Root CLAUDE.md", sub: "how you work overall" },
            { label: "Sub-project CLAUDE.md", sub: "how this part runs" },
            { label: "Leaf file", sub: "one single piece" },
          ]}
        />
      </Diagram>

      <Diagram label="A load table" caption="Map each task to the one file it needs.">
        <MiniTable
          head={["Task", "Read"]}
          rows={[
            ["Styling", "docs/design.md"],
            ["Decisions", "docs/notes.md"],
          ]}
        />
      </Diagram>
    </div>
  );
}
