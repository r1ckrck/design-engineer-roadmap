import { dayVisuals } from "@/content/visuals";

// Renders the registered visual for a day, or nothing if none exists yet.
export function DayVisual({ id }: { id: number }) {
  const Visual = dayVisuals[id];
  if (!Visual) return null;
  return <Visual />;
}
