"use client";

import Link from "next/link";
import { useEffect } from "react";
import { site } from "@/content/site";
import { useSidebar } from "@/lib/sidebar-context";
import { NavList } from "./NavList";
import { OSToggle } from "./OSToggle";
import { ThemeToggle } from "./ThemeToggle";
import { CloseIcon, GitHubIcon } from "./icons";

// The mobile navigation — a full-screen overlay that takes over the screen. Holds the
// day list plus the controls kept out of the compact mobile header.
export function MobileMenu() {
  const { mobileOpen, closeMobile } = useSidebar();

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen, closeMobile]);

  if (!mobileOpen) return null;

  return (
    <div role="dialog" aria-label="Menu" className="fixed inset-0 z-50 flex flex-col bg-bg lg:hidden">
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <Link href="/" onClick={closeMobile} className="font-semibold text-fg">
          Design Engineer Roadmap
        </Link>
        <button
          type="button"
          onClick={closeMobile}
          aria-label="Close menu"
          className="p-1 text-xl text-muted hover:text-fg"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-5 text-sm">
        <NavList onNavigate={closeMobile} />
      </div>

      <div className="flex flex-wrap items-center gap-4 border-t border-border px-5 py-3">
        <OSToggle />
        <ThemeToggle />
        <Link href="/skills" onClick={closeMobile} className="text-sm text-muted hover:text-fg">
          Skills
        </Link>
        <Link href="/glossary" onClick={closeMobile} className="text-sm text-muted hover:text-fg">
          Glossary
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
  );
}
