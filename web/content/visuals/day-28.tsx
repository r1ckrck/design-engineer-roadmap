import { Diagram, FlowSteps, KeyPoints } from "@/components/viz";

export default function Day28Visual() {
  return (
    <div className="space-y-4">
      <Diagram label="Package and ship" caption="A repeated task becomes a skill; the project reaches a public URL.">
        <FlowSteps
          steps={[
            { label: "Write a skill", sub: "capture the repeat work, at the right scope" },
            { label: "Deploy", sub: "hosting service builds from your repo" },
            { label: "Live", sub: "a public address anyone can reach" },
          ]}
        />
      </Diagram>

      <Diagram label="Designer to design engineer" caption="What you can do now that you could only describe before.">
        <KeyPoints
          points={[
            { label: "Structure and direct", sub: "clean context, an agent aimed with intent" },
            { label: "Build through the seam", sub: "tokens connect design to code" },
            { label: "Run, test, and ship", sub: "from an empty folder to a live product" },
          ]}
        />
      </Diagram>
    </div>
  );
}
