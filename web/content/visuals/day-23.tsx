import { Diagram, MiniTable } from "@/components/viz";

// The two MCPs worth connecting, and what each brings to the design-to-code seam.
export default function Day23Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="Two MCPs worth connecting"
        caption="Both at user level — you use them across every project."
      >
        <MiniTable
          head={["MCP", "What it does", "Feeds the seam"]}
          rows={[
            ["Figma", "Reads designs — variables, tokens, screenshots", "real design decisions in"],
            ["Context7", "Fetches current library documentation", "code stays current"],
          ]}
        />
      </Diagram>
    </div>
  );
}
