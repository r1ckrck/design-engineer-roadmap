import { Diagram, FlowSteps, FileTree } from "@/components/viz";

export default function Day02Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="Moving around"
        caption="Every terminal session is just this loop: see where you are, then go somewhere and do something."
      >
        <FlowSteps
          steps={[
            { label: "pwd", sub: "where am I?" },
            { label: "cd Documents", sub: "move into a folder" },
            { label: "mkdir my-first-site", sub: "create the project" },
            { label: "ls", sub: "confirm it is there" },
          ]}
        />
      </Diagram>

      <Diagram
        label="The project skeleton"
        caption="What you build from the terminal by the end of the day."
      >
        <FileTree
          tree={`my-first-site/
├── css/
└── js/`}
        />
      </Diagram>
    </div>
  );
}
