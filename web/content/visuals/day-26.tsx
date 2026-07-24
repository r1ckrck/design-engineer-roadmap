import { Diagram, MiniTable } from "@/components/viz";

export default function Day26Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="The orchestration toolkit"
        caption="Four tools, one job each — match the tool to the size of the work."
      >
        <MiniTable
          head={["Tool", "What it does"]}
          rows={[
            ["Skill", "Teaches a repeatable move"],
            ["Sub-agent", "Does delegated work, reports back"],
            ["Workflow", "Runs many agents at once, merges results"],
            ["Slash command", "A quick /name trigger for a saved instruction"],
          ]}
        />
      </Diagram>
    </div>
  );
}
