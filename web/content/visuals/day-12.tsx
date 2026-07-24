import { BranchDiagram, Diagram } from "@/components/viz";

export default function Day12Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="One component, many uses"
        caption="Define it once; change it once, it updates everywhere."
      >
        <BranchDiagram
          root="Button component"
          branches={["Home page", "Sign-up form", "Nav bar", "Footer"]}
        />
      </Diagram>
    </div>
  );
}
