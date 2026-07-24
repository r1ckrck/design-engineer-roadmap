import { Diagram, FlowSteps } from "@/components/viz";

export default function Day24Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="The plan-mode loop"
        caption="You settle the approach while it is still cheap to change."
      >
        <FlowSteps
          steps={[
            { label: "Draft", sub: "Claude proposes a plan, changes nothing" },
            { label: "Review", sub: "you read files, steps, approach" },
            { label: "Accept", sub: "approve when it matches your intent" },
            { label: "Build", sub: "Claude builds exactly what you agreed" },
          ]}
        />
      </Diagram>
    </div>
  );
}
