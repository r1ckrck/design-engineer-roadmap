"use client";

import { useState } from "react";
import { ShareIcon } from "./icons";

// Shares the current deep link — native share sheet where available, otherwise copies
// the URL to the clipboard with quiet confirmation.
export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ url });
        return;
      } catch {
        /* user dismissed — fall through to copy */
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <button
      type="button"
      onClick={share}
      aria-label="Share this page"
      className="relative shrink-0 p-1 text-base text-muted hover:text-fg"
    >
      <ShareIcon />
      {copied && (
        <span className="absolute right-0 top-full z-30 mt-1 whitespace-nowrap rounded bg-fg px-2 py-0.5 text-xs text-bg">
          Link copied
        </span>
      )}
    </button>
  );
}
