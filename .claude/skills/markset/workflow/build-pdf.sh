#!/usr/bin/env bash
set -euo pipefail

# =============================================================================
# Markset — PDF Build Script
# Converts Markdown to PDF using Pandoc + Tectonic with custom template.
# All paths are relative to the skill folder — no system installs required.
# =============================================================================

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_DIR="$(dirname "$SCRIPT_DIR")"

# Detect architecture
ARCH=$(uname -m)

# Binary paths (populated per machine — see README.md)
PANDOC="$SKILL_DIR/bin/pandoc-${ARCH}"
TECTONIC="$SKILL_DIR/bin/tectonic-${ARCH}"

# Template paths
TEMPLATE="$SKILL_DIR/templates/template.tex"
LUA_FILTER="$SKILL_DIR/templates/divs.lua"

# Font and cache dirs (skill-local, no system install needed)
export OSFONTDIR="$SKILL_DIR/templates/fonts/"
export TECTONIC_CACHE_DIR="$SKILL_DIR/cache/"

# =============================================================================
# Arguments
# =============================================================================

if [ $# -lt 1 ]; then
  echo "Usage: build-pdf.sh <input.md> [output.pdf]"
  exit 1
fi

INPUT="$1"

if [ -n "${2:-}" ]; then
  OUTPUT="$2"
else
  BASENAME="$(basename "$INPUT" .md)"
  OUTPUT="$(dirname "$INPUT")/../build/${BASENAME}.pdf"
fi

# =============================================================================
# Validation
# =============================================================================

if [ ! -x "$PANDOC" ]; then
  echo "Error: pandoc binary not found or not executable at $PANDOC"
  echo "Run 'uname -m' to detect your arch (arm64 or x86_64), then see README.md for setup."
  exit 1
fi

if [ ! -x "$TECTONIC" ]; then
  echo "Error: tectonic binary not found or not executable at $TECTONIC"
  echo "Run 'uname -m' to detect your arch (arm64 or x86_64), then see README.md for setup."
  exit 1
fi

if [ ! -f "$TEMPLATE" ]; then
  echo "Error: LaTeX template not found at $TEMPLATE"
  exit 1
fi

if [ ! -f "$LUA_FILTER" ]; then
  echo "Error: Lua filter not found at $LUA_FILTER"
  exit 1
fi

if [ ! -f "$INPUT" ]; then
  echo "Error: Input file not found at $INPUT"
  exit 1
fi

# Ensure output directory exists
mkdir -p "$(dirname "$OUTPUT")"

# Pandoc 3.x requires --pdf-engine to be an engine name, not a path.
# Expose the arch-specific tectonic binary as 'tectonic' on PATH.
TMPBIN="$(mktemp -d)"
trap 'rm -rf "$TMPBIN"' EXIT
ln -s "$TECTONIC" "$TMPBIN/tectonic"
export PATH="$TMPBIN:$PATH"

# =============================================================================
# Build
# =============================================================================

"$PANDOC" "$INPUT" \
  -o "$OUTPUT" \
  --pdf-engine=tectonic \
  --template="$TEMPLATE" \
  -V fontdir="$SKILL_DIR/templates/fonts" \
  --lua-filter="$LUA_FILTER" \
  --toc \
  --toc-depth=2 \
  --number-sections \
  --listings \
  -V colorlinks=true

echo "PDF generated → $OUTPUT"
