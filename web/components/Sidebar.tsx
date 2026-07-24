"use client";

import Link from "next/link";
import { useSidebar } from "@/lib/sidebar-context";
import { NavList } from "./NavList";

// The desktop contents rail. Collapsible via the header toggle; hidden below lg (where the
// full-screen mobile menu takes over).
export function Sidebar() {
  const { collapsed } = useSidebar();

  if (collapsed) return null;

  return (
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 overflow-y-auto border-r border-border p-5 text-sm lg:block">
      <Link href="/" className="mb-5 block font-semibold text-fg">
        Design Engineer Roadmap
      </Link>
      <NavList />
    </aside>
  );
}
