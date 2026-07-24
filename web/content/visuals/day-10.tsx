import { Diagram, MiniTable } from "@/components/viz";

export default function Day10Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="The four portability files"
        caption="Each settles one cross-machine question, once, for everyone."
      >
        <MiniTable
          head={["File", "What it settles"]}
          rows={[
            [".gitignore", "keeps generated files out of Git"],
            [".nvmrc", "pins the Node version"],
            ["packageManager", "pins the install tool"],
            [".gitattributes", "normalizes line endings"],
          ]}
        />
      </Diagram>
    </div>
  );
}
