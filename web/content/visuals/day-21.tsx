import { Diagram, FlowSteps } from "@/components/viz";

// Building a skill, start to finish: pick the job, draft SKILL.md, lean it with references,
// run it, then classify it.
export default function Day21Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="Building a skill"
        caption="From a repeatable task to a move Claude fires on its own."
      >
        <FlowSteps
          steps={[
            { label: "Pick a repeatable job", sub: "something you re-explain every time" },
            { label: "Draft the SKILL.md", sub: "name + trigger description first" },
            { label: "Lean it with references", sub: "push detail out of the main file" },
            { label: "Try it out", sub: "it follows your own steps" },
            { label: "Portable or orchestrator", sub: "does it lean on this project?" },
          ]}
        />
      </Diagram>
    </div>
  );
}
