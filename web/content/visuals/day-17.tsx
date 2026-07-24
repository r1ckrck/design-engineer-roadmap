import { Diagram, FlowSteps, MiniTable } from "@/components/viz";

export default function Day17Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="One value, one path"
        caption="A design decision flows through named steps — never retyped, always traceable."
      >
        <FlowSteps
          steps={[
            { label: "Figma", sub: "the decision is made" },
            { label: "Token", sub: "the named value" },
            { label: "CSS variable", sub: "the value in code" },
            { label: "Component", sub: "reads it by name" },
          ]}
        />
      </Diagram>

      <Diagram
        label="Two homes"
        caption="The why and the what live apart, each with one owner."
      >
        <MiniTable
          head={["Home", "Holds"]}
          rows={[
            ["Decisions doc", "the reasoning (why)"],
            ["Token file", "the actual values (what)"],
          ]}
        />
      </Diagram>
    </div>
  );
}
