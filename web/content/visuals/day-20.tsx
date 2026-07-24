import { Diagram, StackDiagram } from "@/components/viz";

// Skill anatomy: a SKILL.md read top to bottom — frontmatter triggers, body instructs,
// references hold the detail that loads on demand.
export default function Day20Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="Anatomy of a skill"
        caption="Read top to bottom: the trigger fires it, the body runs it, references deepen it only when needed."
      >
        <StackDiagram
          layers={[
            { label: "Frontmatter", sub: "name + description — the trigger that fires the skill" },
            { label: "Body", sub: "the steps Claude follows for the task" },
            { label: "References", sub: "deeper detail, loaded only on demand" },
          ]}
        />
      </Diagram>
    </div>
  );
}
