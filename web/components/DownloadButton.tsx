import { DownloadIcon } from "./icons";

const cls =
  "inline-flex items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 text-sm text-fg transition-colors hover:bg-surface";

// Reusable download control. Pass `href` for a static file (skill zip) or `onClick` for a
// generated download (per-day markdown).
export function DownloadButton({
  href,
  onClick,
  children,
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  if (href) {
    return (
      <a href={href} download className={cls}>
        <DownloadIcon />
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      <DownloadIcon />
      {children}
    </button>
  );
}
