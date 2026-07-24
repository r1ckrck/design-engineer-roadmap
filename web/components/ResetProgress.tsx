"use client";

import { resetProgress } from "@/lib/progress";

export function ResetProgress() {
  const reset = () => {
    if (window.confirm("Reset your progress? This clears every completed day.")) {
      resetProgress();
    }
  };

  return (
    <button
      type="button"
      onClick={reset}
      className="text-sm text-muted underline underline-offset-2 hover:text-fg"
    >
      Reset progress
    </button>
  );
}
