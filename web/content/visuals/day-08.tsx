import { BranchDiagram, Diagram, FileTree } from "@/components/viz";

export default function Day08Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="The router pattern"
        caption="The root file points; the detail lives where it belongs."
      >
        <BranchDiagram
          root="CLAUDE.md"
          branches={["docs/design.md — the look", "docs/notes.md — decisions"]}
        />
      </Diagram>

      <Diagram label="Structure by concern" caption="Notes, code, and pages each get their own place.">
        <FileTree
          tree={`my-first-site/
├── CLAUDE.md      router
├── docs/
│   ├── design.md  the look
│   └── notes.md   decisions
├── css/           code
├── js/            code
└── index.html     the page`}
        />
      </Diagram>
    </div>
  );
}
