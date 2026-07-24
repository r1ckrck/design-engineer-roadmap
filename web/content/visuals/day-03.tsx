import { Diagram, KeyPoints, FlowSteps } from "@/components/viz";

export default function Day03Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="The four regions"
        caption="Learn where each panel lives and the editor stops feeling busy."
      >
        <KeyPoints
          points={[
            { label: "File explorer", sub: "lists your files and folders — left" },
            { label: "Editor", sub: "read and change code — center" },
            { label: "Status bar", sub: "current file's details — bottom" },
            { label: "Activity bar", sub: "files, search, extensions — far left" },
          ]}
        />
      </Diagram>

      <Diagram
        label="From folder to workbench"
        caption="Open the project, make files, then run everything from the built-in terminal."
      >
        <FlowSteps
          steps={[
            { label: "Open Folder", sub: "my-first-site" },
            { label: "New File", sub: "index.html, css/styles.css" },
            { label: "Quick open", sub: "Cmd/Ctrl + P" },
            { label: "Built-in terminal", sub: "Ctrl + `" },
          ]}
        />
      </Diagram>
    </div>
  );
}
