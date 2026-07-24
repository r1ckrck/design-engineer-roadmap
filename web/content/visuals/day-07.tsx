import { Diagram, FlowSteps, KeyPoints } from "@/components/viz";

export default function Day07Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="Research, then build"
        caption="Steer before any code exists, and understand what lands."
      >
        <FlowSteps
          steps={[
            { label: "Search the web", sub: "look it up, no browser needed" },
            { label: "Plan", sub: "propose an approach first" },
            { label: "Build", sub: "write the file, you approve" },
            { label: "Understand", sub: "walk through it line by line" },
          ]}
        />
      </Diagram>

      <Diagram
        label="Native web first"
        caption="Built-in abilities are the default; add tools only for special cases."
      >
        <KeyPoints
          points={[
            { label: "Search", sub: "find and summarize on its own" },
            { label: "Fetch", sub: "read a single page directly" },
            { label: "Playwright later", sub: "Phase 6, for driving a full browser" },
          ]}
        />
      </Diagram>
    </div>
  );
}
