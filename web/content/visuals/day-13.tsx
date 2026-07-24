import { Diagram, FlowSteps } from "@/components/viz";

export default function Day13Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="How a token reaches the screen"
        caption="Change the token; every component using it updates."
      >
        <FlowSteps
          steps={[
            { label: "Design token", sub: "primary color, named once" },
            { label: "CSS variable", sub: "the token, in code" },
            { label: "Tailwind class", sub: "applied to elements" },
            { label: "Component", sub: "what you see on screen" },
          ]}
        />
      </Diagram>
    </div>
  );
}
