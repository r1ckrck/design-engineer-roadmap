# Markdown Styleguide

## Frontmatter
Required fields:
```yaml
---
title: "Document Title"
author: "Arnesh Mandal"
version: "1.0"
date: "2026-01-30"
---
```

## Structure
- One sentence per line (source readability)
- Consecutive sentences combine into paragraphs in PDF
- Use bullets for separate points that should not combine into paragraphs
- Blank line between paragraphs or sections
- No indentation

## Headings
- Max depth: H4
- Title Case: `# Getting Started With the API`
- Auto-numbered (never manual)
- No blank line after heading, blank line before next heading

## Lists
- Max 2 levels nesting
- No callouts or complex blocks inside

```markdown
- Parent
  - Child
1. First
2. Second
```

## Tables
Caption mandatory (`:` line immediately after, no blank):
Use dash count to control the colomn width ratios
Distribute based on content length (short columns = fewer dashes, long columns = more)
```markdown
| Col A | Col B |
|-------|-------|
| Data  | Data  |
: Table caption
```

## Code
- Inline: `` `code` ``
- Blocks: always specify language, aim <80 chars, no blank line before

````markdown
```python
def hello():
    print("world")
```
````

## ASCII Art
- Use `ascii` class for diagrams/art
- max width of cover ascii art: 82
- max height of cover ascii art: 

````markdown
```ascii
   +---------+
   |  Box    |
   +---------+
```
````
## Cover ASCII Art
- Use `include-before` in YAML in frontmatter section after date
- max width of cover ascii art: 60
- max height of cover ascii art: 16

```yaml
---
include-before: |
  \begin{lstlisting}[style=coverasciiart]
  Your ASCII art here
  \end{lstlisting}
---
```

## Callouts
Types: `note`, `tip`, `warning`, `important`
Never inside lists/tables or nested.

```markdown
::: note
Content here.
:::
```

## Images
Use only when necessary. Formats: PNG, JPG, PDF.

Real: `![Caption](path.png)`

Placeholder:
```markdown
::: image-placeholder
Figure: Title
Description: What it shows
Dimensions: full-width
:::
```

## Links
`[descriptive text](url)` - never "click here" or raw URLs

## Other Elements
- **Block quotes**: `> text` (use sparingly)
- **Horizontal rules**: `---` (use sparingly)
- **Footnotes**: `text[^1]` + `[^1]: Note` at end (use sparingly)
- **Icons/Emojis**: Use simple ASCII characters

## Prohibited
No raw LaTeX (`\newpage`), HTML (`<div>`), or manual styling (fonts/colors/spacing).
Template handles all visual decisions.