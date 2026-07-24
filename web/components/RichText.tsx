import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { rehypeGlossary } from "@/lib/rehype-glossary";
import { Tooltip } from "./Tooltip";

// Renders a text block's markdown: paragraphs, inline code, bold, lists, and links.
// Internal links (/day/x) route through next/link; external links open in a new tab.
// Glossary terms (wrapped by rehypeGlossary into <span data-term>) become Tooltips.
export function RichText({ children }: { children: string }) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeGlossary]}
      components={{
        p: ({ children }) => <p className="leading-relaxed text-fg/90">{children}</p>,
        strong: ({ children }) => <strong className="font-semibold text-fg">{children}</strong>,
        code: ({ children }) => (
          <code className="rounded bg-surface px-1 py-0.5 font-mono text-[0.9em]">{children}</code>
        ),
        ul: ({ children }) => <ul className="list-disc space-y-1 pl-5 text-fg/90">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal space-y-1 pl-5 text-fg/90">{children}</ol>,
        span: ({ children, ...props }) => {
          const term = (props as Record<string, unknown>)["data-term"];
          if (typeof term === "string") return <Tooltip term={term}>{children}</Tooltip>;
          return <span>{children}</span>;
        },
        a: ({ href, children }) => {
          const url = href ?? "#";
          if (url.startsWith("/")) {
            return (
              <Link href={url} className="text-accent underline underline-offset-2">
                {children}
              </Link>
            );
          }
          return (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              {children}
            </a>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
