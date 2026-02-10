# Default input (can be overridden): make pdf IN=docs/foo.md
IN ?= docs/index.md

# Default output (can be overridden): make pdf OUT=build/foo.pdf
# If OUT not set, derive from IN: build/<filename>.pdf
OUT ?= build/$(notdir $(IN:.md=.pdf))

pdf:
	./workflow/build-pdf.sh $(IN) $(OUT)

clean:
	rm -rf build/*