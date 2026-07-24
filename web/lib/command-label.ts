import type { OS } from "@/content/types";

// The label shown above a command copyable. "Terminal" is ambiguous on Windows (there is no
// default terminal — PowerShell and Command Prompt both exist), so on Windows the generic
// label names the VS Code terminal (Git Bash) the course standardizes on. An explicit
// runIn (the PowerShell install) or a non-generic authored label wins.
export function commandLabel(
  os: OS,
  runIn: "terminal" | "powershell" | undefined,
  authored: string,
): string {
  if (runIn === "powershell") return "Run in PowerShell";
  if (authored && authored !== "Run in terminal") return authored;
  return os === "windows" ? "Run in the VS Code terminal" : "Run in the terminal";
}
