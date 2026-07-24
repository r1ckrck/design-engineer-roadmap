import { Diagram, KeyPoints, FlowSteps } from "@/components/viz";

export default function Day06Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="What Claude Code does"
        caption="One agent in your terminal, directed in plain English."
      >
        <KeyPoints
          points={[
            { label: "Reads", sub: "your files and project structure" },
            { label: "Writes & edits", sub: "code you approve" },
            { label: "Runs", sub: "commands on your say-so" },
            { label: "Asks permission", sub: "before it changes anything" },
          ]}
        />
      </Diagram>

      <Diagram
        label="A turn with the agent"
        caption="Nothing happens to your project without your yes."
      >
        <FlowSteps
          steps={[
            { label: "Start", sub: "run claude in your project" },
            { label: "Prompt", sub: "say what you want, plainly" },
            { label: "Approve", sub: "read the change, then allow it" },
          ]}
        />
      </Diagram>
    </div>
  );
}
