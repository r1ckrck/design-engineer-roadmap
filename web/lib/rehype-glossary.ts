import { SKIP, visit } from "unist-util-visit";
import { glossaryTerms } from "@/content/glossary";

// A rehype plugin that wraps the first occurrence of each glossary term (once per document)
// in a <span data-term="…">, which RichText renders as a Tooltip. Text inside links, code,
// and preformatted blocks is left alone.
const SKIP_TAGS = new Set(["a", "code", "pre"]);

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function rehypeGlossary() {
  const sorted = [...glossaryTerms].sort((a, b) => b.length - a.length);
  const source = `\\b(${sorted.map(escapeRegex).join("|")})\\b`;

  return (tree: unknown) => {
    const seen = new Set<string>();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    visit(tree as any, "text", (node: any, index: any, parent: any) => {
      if (!parent || index === null || SKIP_TAGS.has(parent.tagName)) return;

      const value: string = node.value;
      const re = new RegExp(source, "gi");
      let match: RegExpExecArray | null;
      let found: { start: number; end: number; term: string } | null = null;

      while ((match = re.exec(value))) {
        const term = match[1].toLowerCase();
        if (!seen.has(term)) {
          found = { start: match.index, end: match.index + match[0].length, term };
          break;
        }
      }
      if (!found) return;

      seen.add(found.term);
      const before = value.slice(0, found.start);
      const matched = value.slice(found.start, found.end);
      const after = value.slice(found.end);

      const span = {
        type: "element",
        tagName: "span",
        properties: { "data-term": found.term },
        children: [{ type: "text", value: matched }],
      };

      const replacement = [
        ...(before ? [{ type: "text", value: before }] : []),
        span,
        ...(after ? [{ type: "text", value: after }] : []),
      ];

      parent.children.splice(index, 1, ...replacement);
      return [SKIP, index + replacement.length];
    });
  };
}
