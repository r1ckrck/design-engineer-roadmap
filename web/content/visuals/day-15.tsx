import { Diagram, FlowSteps, MiniTable } from "@/components/viz";

export default function Day15Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="The feedback loop"
        caption="The seeing is the skill. Repeat until the interface is good."
      >
        <FlowSteps
          steps={[
            { label: "Look", sub: "read it as a designer" },
            { label: "Feedback", sub: "name one thing to improve" },
            { label: "Change", sub: "direct it in plain terms" },
            { label: "Look again", sub: "judge the result" },
          ]}
        />
      </Diagram>

      <Diagram label="Three ways software runs" caption="How it runs tells you how to view it.">
        <MiniTable
          head={["Way it runs", "How you reach it"]}
          rows={[
            ["Node dev server", "a localhost port, started with a command"],
            ["Python-hosted", "its own localhost port, a Python command"],
            ["Static file", "open the HTML file directly, no server"],
          ]}
        />
      </Diagram>
    </div>
  );
}
