import { Diagram, FlowSteps } from "@/components/viz";

export default function Day14Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="How your site reaches you"
        caption="Your machine serves the site to itself; the browser reads it at a localhost address."
      >
        <FlowSteps
          steps={[
            { label: "Your code", sub: "files in my-first-site" },
            { label: "Dev server", sub: "npm run dev, running locally" },
            { label: "localhost:5173", sub: "a numbered door on this computer" },
            { label: "Your browser", sub: "the site, running live" },
          ]}
        />
      </Diagram>
    </div>
  );
}
