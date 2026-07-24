import { Diagram, StackDiagram } from "@/components/viz";

export default function Day11Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="Structure over style"
        caption="HTML is the bones; CSS is the skin painted on top."
      >
        <StackDiagram
          layers={[
            { label: "CSS", sub: "style — how it looks" },
            { label: "HTML", sub: "structure — what things are" },
          ]}
        />
      </Diagram>

      <Diagram
        label="The box model"
        caption="Every element is a box, nested from the outside in."
      >
        <StackDiagram
          layers={[
            { label: "Margin", sub: "space outside the border" },
            { label: "Border", sub: "the edge of the box" },
            { label: "Padding", sub: "space inside the border" },
            { label: "Content", sub: "the text or image itself" },
          ]}
        />
      </Diagram>
    </div>
  );
}
