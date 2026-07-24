// Active/inactive classes shared by the segmented toggles (the OS switch and the OS tabs).
// Each caller adds its own size/type classes around these.
export function segmentedTab(active: boolean): string {
  return active ? "bg-surface text-fg" : "text-muted hover:text-fg";
}
