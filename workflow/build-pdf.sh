#!/usr/bin/env bash
set -euo pipefail

# =============================================================================
# PDF Build Script
# Converts Markdown to PDF using Pandoc + Tectonic with custom template
# =============================================================================

# Micromamba environment
ENV_NAME="docs"
MICROMAMBA="/Users/arneshmandal/bin/micromamba"

# Paths
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
TEMPLATE="$PROJECT_DIR/templates/template.tex"
LUA_FILTER="$PROJECT_DIR/templates/divs.lua"

# Defaults
DEFAULT_INPUT="$PROJECT_DIR/docs/index.md"

# Input: arg1 or default
INPUT="${1:-$DEFAULT_INPUT}"

# Output: arg2 or derive from input
if [ -n "${2:-}" ]; then
  OUTPUT="$2"
else
  BASENAME="$(basename "$INPUT" .md)"
  OUTPUT="$PROJECT_DIR/build/$BASENAME.pdf"
fi

# Ensure output folder exists
mkdir -p "$(dirname "$OUTPUT")"

# Verify template exists
if [ ! -f "$TEMPLATE" ]; then
  echo "Error: Template not found at $TEMPLATE"
  exit 1
fi

# Verify lua filter exists
if [ ! -f "$LUA_FILTER" ]; then
  echo "Error: Lua filter not found at $LUA_FILTER"
  exit 1
fi

# Verify input exists
if [ ! -f "$INPUT" ]; then
  echo "Error: Input file not found at $INPUT"
  exit 1
fi

# Build PDF
$MICROMAMBA run -n "$ENV_NAME" \
  pandoc "$INPUT" \
    -o "$OUTPUT" \
    --pdf-engine=tectonic \
    --template="$TEMPLATE" \
    --lua-filter="$LUA_FILTER" \
    --toc \
    --toc-depth=2 \
    --number-sections \
    --listings \
    -V colorlinks=true

echo "PDF generated → $OUTPUT"