"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { useScrolled } from "@/lib/use-scrolled";
import { useSidebar } from "@/lib/sidebar-context";
import { OSToggle } from "./OSToggle";
import { ThemeToggle } from "./ThemeToggle";
import { ShareButton } from "./ShareButton";
import { Search } from "./Search";
import { GitHubIcon, MenuIcon } from "./icons";

// Sticky top header. On mobile the hamburger opens the full-screen menu; on desktop it
// collapses the sidebar. Secondary controls collapse into the menu below lg.
export function SiteHeader({ eyebrow, title }: { eyebrow?: string; title?: string }) {
  const scrolled = useScrolled(12);
  const { collapsed, toggle, openMobile } = useSidebar();

  const onMenu = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) openMobile();
    else toggle();
  };

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-bg/90 backdrop-blur">
      <div className={`flex items-center gap-3 px-6 ${scrolled ? "py-2" : "py-3"}`}>
        <button
          type="button"
          onClick={onMenu}
          aria-label="Menu"
          aria-expanded={!collapsed}
          className="rounded-sm p-1.5 text-lg text-muted hover:bg-surface hover:text-fg"
        >
          <MenuIcon />
        </button>

        <div className="min-w-0 flex-1">
          {eyebrow && !scrolled && (
            <div className="font-mono text-[11px] uppercase tracking-wide text-muted">{eyebrow}</div>
          )}
          {title && (
            <div className="flex items-center gap-2">
              <span className="truncate font-medium text-fg">{title}</span>
              <ShareButton />
            </div>
          )}
        </div>

        <Search />

        {/* Secondary controls — desktop only; on mobile they live in the full-screen menu. */}
        <div className="hidden items-center gap-3 lg:flex">
          <OSToggle />
          <ThemeToggle />
          <Link href="/skills" className="text-sm text-muted hover:text-fg">
            Skills
          </Link>
          <a
            href={site.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="p-1 text-lg text-muted hover:text-fg"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
