"use client";

import { useState } from "react";
import { LinkIcon } from "./icons";

// A hover-revealed affordance that copies a deep link to this step.
export function StepAnchor({ n }: { n: number }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const url = `${window.location.origin}${window.location.pathname}#step-${n}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      /* clipboard unavailable */
    }
    history.replaceState(null, "", `#step-${n}`);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy link to step ${n}`}
      className="ml-2 hidden align-middle text-sm text-muted opacity-0 transition-opacity hover:text-accent focus:opacity-100 group-hover:opacity-100 lg:inline-block"
    >
      {copied ? <span className="text-xs">copied</span> : <LinkIcon />}
    </button>
  );
}
