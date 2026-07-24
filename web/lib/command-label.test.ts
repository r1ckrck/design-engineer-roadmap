import { describe, expect, it } from "vitest";
import { commandLabel } from "./command-label";

describe("commandLabel", () => {
  it("powershell runIn overrides everything", () => {
    expect(commandLabel("mac", "powershell", "Run in terminal")).toBe("Run in PowerShell");
    expect(commandLabel("windows", "powershell", "anything")).toBe("Run in PowerShell");
  });

  it("windows generic label names the VS Code terminal", () => {
    expect(commandLabel("windows", undefined, "Run in terminal")).toBe("Run in the VS Code terminal");
  });

  it("mac generic label says the terminal", () => {
    expect(commandLabel("mac", undefined, "Run in terminal")).toBe("Run in the terminal");
  });

  it("honors a non-generic authored label", () => {
    expect(commandLabel("windows", undefined, "Run in PowerShell")).toBe("Run in PowerShell");
  });
});
