import { Diagram, MiniTable } from "@/components/viz";

// Two panels: where a skill lives (scope), and the eight skills bundled with the course.
export default function Day22Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="User versus project scope"
        caption="One question decides it: everywhere, or just here?"
      >
        <MiniTable
          head={["Scope", "Lives in", "Reach"]}
          rows={[
            ["User", "~/.claude/skills/", "every project"],
            ["Project", "repo/.claude/skills/", "one repo, travels with it"],
          ]}
        />
      </Diagram>

      <Diagram
        label="The eight bundled skills"
        caption="Worth having everywhere — install at user level."
      >
        <MiniTable
          head={["Skill", "What it does"]}
          rows={[
            ["atelier", "Decide the tech stack a build needs"],
            ["markset", "Turn markdown into a polished PDF"],
            ["coding-standards", "Write clean, consistent code"],
            ["code-simplifier", "Refine code for clarity"],
            ["frontend-design", "Produce distinctive, production UI"],
            ["testing", "Verify it works; debug what breaks"],
            ["media-processing", "Convert, resize, optimize media"],
            ["playwright-cli", "Drive a real browser"],
          ]}
        />
      </Diagram>
    </div>
  );
}
