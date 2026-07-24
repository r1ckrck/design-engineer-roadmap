"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { arcs, course, dayTitles } from "@/content";
import { useProgress } from "@/lib/progress";

// The phase/day contents. Shared by the desktop sidebar and the mobile full-screen menu.
export function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const path = usePathname();
  const done = useProgress();

  return (
    <nav>
      {arcs.map((arc) => (
        <div key={arc.key} className="mb-5">
          <div className="mb-2 font-mono text-xs uppercase tracking-wide text-muted">{arc.label}</div>
          {course.phases
            .filter((p) => p.arc === arc.key)
            .map((p) => (
              <div key={p.id} className="mb-2.5">
                <div className="font-medium text-fg/80">
                  {p.id} &middot; {p.title}
                </div>
                <ul className="ml-3 mt-1 space-y-0.5">
                  {p.dayIds.map((d) => {
                    const active = path === `/day/${d}` || path === `/day/${d}/`;
                    return (
                      <li key={d}>
                        <Link
                          href={`/day/${d}`}
                          onClick={onNavigate}
                          className={`flex items-center gap-2 ${
                            active ? "font-medium text-accent" : "text-muted hover:text-fg"
                          }`}
                        >
                          <span className="w-3 text-center">{done[d] ? "✓" : active ? "●" : "·"}</span>
                          <span className="truncate">
                            Day {d} — {dayTitles[d]}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
        </div>
      ))}
    </nav>
  );
}
