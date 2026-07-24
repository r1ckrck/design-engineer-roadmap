import type { Block } from "@/content/types";
import { Copyable } from "./Copyable";
import { Disclosure } from "./Disclosure";
import { OSTabs } from "./OSTabs";
import { Callout } from "./Callout";
import { RichText } from "./RichText";

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "text":
      return <RichText>{block.md}</RichText>;
    case "copyable":
      return (
        <Copyable kind={block.kind} label={block.label} text={block.text} runIn={block.runIn} />
      );
    case "disclosure":
      return <Disclosure summary={block.summary} body={block.body} />;
    case "callout":
      return <Callout kind={block.kind} body={block.body} />;
    case "ostabs":
      return <OSTabs mac={block.mac} windows={block.windows} />;
  }
}
