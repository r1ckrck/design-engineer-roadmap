import { Diagram, FlowSteps, BranchDiagram } from "@/components/viz";

export default function Day05Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="Local to cloud"
        caption="One nickname, origin, ties your machine to its GitHub copy."
      >
        <BranchDiagram
          root="my-first-site (local)"
          branches={["origin - github.com/you/my-first-site"]}
        />
      </Diagram>

      <Diagram
        label="Connect and push"
        caption="Three commands the first time; after that, just git push."
      >
        <FlowSteps
          steps={[
            { label: "git remote add origin", sub: "point at the cloud copy" },
            { label: "git branch -M main", sub: "match GitHub's default" },
            { label: "git push -u origin main", sub: "send history, set default" },
          ]}
        />
      </Diagram>
    </div>
  );
}
