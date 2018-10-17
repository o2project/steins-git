NPM_MOD_DIR := $(CURDIR)/node_modules
NPM_BIN_DIR := $(NPM_MOD_DIR)/.bin

SRC_DIR := $(CURDIR)/src
DRAFTS_DIR := $(CURDIR)/src/drafts
DIST_DIR := $(CURDIR)/dist
PUBLIC_DIR := $(CURDIR)/public

####################################
# Self-documentize utility
####################################
.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

####################################
# Bootstrap
####################################
.PHONY: init
init: ## Install dependencies.
	yarn

####################################
# Clean
####################################
.PHONY: clean
clean: clean_dist ## Clean up before building the code.

.PHONY: clean_dist
clean_dist:
	$(NPM_BIN_DIR)/rimraf $(DIST_DIR)/*.*

####################################
# Formatter
####################################
.PHONY: format
format: format_md ## Format drafts.

.PHONY: format_md
format_md:
	$(NPM_BIN_DIR)/prettier --config $(CURDIR)/.prettierrc.js --write {$(DRAFTS_DIR)/*.md,$(DRAFTS_DIR)/**/*.md}

.PHONY: check_format
check_format: format
	git diff --exit-code

####################################
# Build
####################################
.PHONY: build
build: ENV ?= dev ## Building scripts and stylesheets.
build:
ifeq ($(ENV),prd)
	$(MAKE) _build RELEASE_CHANNEL=production
else
	$(MAKE) _build RELEASE_CHANNEL=development
endif

.PHONY: _build
_build: clean build_markdown

.PHONY: build_markdown
build_markdown:
	$(NPM_BIN_DIR)/markdown-include tools/markdown-include.json

####################################
# Preview server
####################################
.PHONY: serve
serve: serve_with_bs ## Launch preview server with browser-sync.

.PHONY: serve_with_bs
serve_with_bs:
	$(NPM_BIN_DIR)/browser-sync start --config $(CURDIR)/bs-config.js
