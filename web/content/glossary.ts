// Jargon defined once. The first time a term appears in a day's text it gets a hover/focus
// tooltip (see lib/rehype-glossary). Keys are lowercase for matching.
export const glossary: Record<string, string> = {
  cli: "Command-line interface — controlling your computer by typing commands instead of clicking.",
  ide: "Integrated development environment — a code editor with extra tools built in, like VS Code.",
  terminal: "The text window where you type commands.",
  repository: "A project tracked by Git, with its full history. Often shortened to 'repo'.",
  commit: "A saved snapshot of your project at a moment in time.",
  localhost: "Your own computer acting as a web server, reachable at an address like localhost:3000.",
  component: "A reusable piece of interface you define once and use many times.",
  token: "A named design decision — a color, spacing, or size — defined once and reused everywhere.",
  mcp: "Model Context Protocol — a way to connect Claude Code to an outside service, like Figma.",
  skill: "A packaged set of instructions that teaches Claude Code a repeatable task.",
  framework: "A foundation of pre-built structure you build an app on top of, like React or Next.js.",
  dependency: "An outside package your project relies on.",
  git: "The version-control system that tracks every change to your project.",
};

export const glossaryTerms = Object.keys(glossary);
