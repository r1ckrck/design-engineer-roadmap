"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { OS } from "@/content/types";

const KEY = "der-os";

const OSContext = createContext<{ os: OS; setOS: (o: OS) => void }>({
  os: "mac",
  setOS: () => {},
});

export function OSProvider({ children }: { children: React.ReactNode }) {
  const [os, setOS] = useState<OS>("mac");

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved === "mac" || saved === "windows") setOS(saved);
  }, []);

  const update = (o: OS) => {
    setOS(o);
    localStorage.setItem(KEY, o);
  };

  return <OSContext.Provider value={{ os, setOS: update }}>{children}</OSContext.Provider>;
}

export const useOS = () => useContext(OSContext);
