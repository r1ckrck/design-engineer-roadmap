import { Diagram, FlowSteps } from "@/components/viz";

export default function Day27Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="Design to built"
        caption="Each step draws on an earlier phase; the design carries through unbroken."
      >
        <FlowSteps
          steps={[
            { label: "Atelier picks the stack", sub: "right-size, don't over-build" },
            { label: "Context skeleton", sub: "router CLAUDE.md, organized by concern" },
            { label: "Tokens seam", sub: "decisions become tokens, tokens become components" },
            { label: "Build and refine", sub: "run the look-feedback-change loop" },
          ]}
        />
      </Diagram>
    </div>
  );
}
