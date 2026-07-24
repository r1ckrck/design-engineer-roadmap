// tip/note stay neutral (accent is reserved for interaction); important carries the
// single warm caution tint. Kinds are told apart by their mono label.
const styles: Record<string, string> = {
  tip: "border-border bg-surface",
  note: "border-border bg-surface",
  important: "border-caution/40 bg-caution/10",
};

const labels: Record<string, string> = {
  tip: "Tip",
  note: "Note",
  important: "Important",
};

export function Callout({
  kind,
  body,
}: {
  kind: "tip" | "note" | "important";
  body: string;
}) {
  return (
    <div className={`my-4 rounded-lg border p-4 ${styles[kind]}`}>
      <div className="mb-1 font-mono text-xs uppercase tracking-wide text-muted">
        {labels[kind]}
      </div>
      <p className="leading-relaxed text-fg/90">{body}</p>
    </div>
  );
}
