import { Diagram, MiniTable } from "@/components/viz";

export default function Day19Visual() {
  return (
    <div className="space-y-4">
      <Diagram
        label="Media jobs, one engine"
        caption="FFmpeg handles each of these from the command line — no memorizing required."
      >
        <MiniTable
          head={["Job", "What it does"]}
          rows={[
            ["Resize", "fit an image to the web"],
            ["Optimize", "smaller file, same look"],
            ["Extract frame", "one still from a video"],
            ["Video to GIF", "short loop, size vs. quality"],
          ]}
        />
      </Diagram>
    </div>
  );
}
