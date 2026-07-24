import { Diagram, FlowSteps, BranchDiagram } from "@/components/viz";

export default function Day18Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="Docs built from the source"
        caption="Metadata lives beside the code, so the doc page reflects the current component by construction."
      >
        <FlowSteps
          steps={[
            { label: "Component", sub: "the working code" },
            { label: "+ Metadata", sub: "name, purpose, options" },
            { label: "Generated docs", sub: "read at build time" },
          ]}
        />
      </Diagram>

      <Diagram
        label="One source, one truth"
        caption="Change the component and its facts change in the same edit — no second copy to forget."
      >
        <BranchDiagram
          root="Component + metadata"
          branches={["Name", "Purpose", "Options"]}
        />
      </Diagram>
    </div>
  );
}
