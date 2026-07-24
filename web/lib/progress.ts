"use client";

import { useEffect, useState } from "react";

const KEY = "der-progress";
const EVENT = "der-progress-change";

type Progress = Record<number, boolean>;

function read(): Progress {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? "{}");
  } catch {
    return {};
  }
}

function write(p: Progress) {
  localStorage.setItem(KEY, JSON.stringify(p));
  window.dispatchEvent(new Event(EVENT));
}

// One day's completion state, with a toggle.
export function useDayDone(id: number) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const sync = () => setDone(!!read()[id]);
    sync();
    window.addEventListener(EVENT, sync);
    return () => window.removeEventListener(EVENT, sync);
  }, [id]);

  const toggle = () => {
    const p = read();
    p[id] = !p[id];
    write(p);
  };

  return { done, toggle };
}

// Clear all completion state (used by the landing's reset control).
export function resetProgress(): void {
  localStorage.removeItem(KEY);
  window.dispatchEvent(new Event(EVENT));
}

// The whole progress map, kept live (used by the sidebar).
export function useProgress(): Progress {
  const [map, setMap] = useState<Progress>({});

  useEffect(() => {
    const sync = () => setMap(read());
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return map;
}
