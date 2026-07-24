import localFont from "next/font/local";

// Self-hosted so the static export has no external font requests.
// Each exposes a CSS variable that globals.css maps onto a Tailwind font token.

// Reading + UI. Variable weight carries the whole hierarchy (weight, not size).
export const sans = localFont({
  src: "./fonts/GeneralSans-Variable.woff2",
  weight: "200 700",
  display: "swap",
  variable: "--f-sans",
});

// All technical content — commands, prompts, paths, step numbers, eyebrow labels.
export const mono = localFont({
  src: "./fonts/JetBrainsMono-Variable.ttf",
  weight: "100 800",
  display: "swap",
  variable: "--f-mono",
});

// Display — reserved for the landing hero alone. A rare voice; never elsewhere.
export const display = localFont({
  src: "./fonts/PPNeueMachina-InktrapBlack.woff2",
  weight: "900",
  display: "swap",
  variable: "--f-display",
});
