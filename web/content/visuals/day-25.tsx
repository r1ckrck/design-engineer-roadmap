import { Diagram, BranchDiagram, FlowSteps } from "@/components/viz";

export default function Day25Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="One ask, many agents"
        caption="Each sub-agent takes one independent piece, all at the same time."
      >
        <BranchDiagram
          root="Improve this site"
          branches={["Accessibility", "Performance", "Layout", "Color", "Copy"]}
        />
      </Diagram>

      <Diagram
        label="Gather, then merge"
        caption="You get one organized summary, not five scattered ones."
      >
        <FlowSteps
          steps={[
            { label: "Agents run in parallel", sub: "each researches its own part" },
            { label: "Results consolidated", sub: "the workflow merges them" },
            { label: "One summary", sub: "delivered to the main session" },
          ]}
        />
      </Diagram>
    </div>
  );
}
