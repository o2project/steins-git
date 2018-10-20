NPM_MOD_DIR := $(CURDIR)/node_modules
NPM_BIN_DIR := $(NPM_MOD_DIR)/.bin

SRC_DIR := $(CURDIR)/src
DIST_DIR := $(CURDIR)/_book
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
	$(NPM_BIN_DIR)/prettier --config $(CURDIR)/.prettierrc.js --write {$(SRC_DIR)/*.md,$(SRC_DIR)/**/*.md}

.PHONY: check_format
check_format: format
	git diff --exit-code

####################################
# Build
####################################
.PHONY: build
build: ENV ?= dev ## Building gitbook.
build:
ifeq ($(ENV),prd)
	$(MAKE) _build RELEASE_CHANNEL=production
else
	$(MAKE) _build RELEASE_CHANNEL=development
endif

.PHONY: _build
_build: clean build_gitbook

.PHONY: build_gitbook
build_gitbook:
	$(NPM_BIN_DIR)/gitbook build

####################################
# Preview server
####################################
.PHONY: serve
serve: serve_with_gitbook ## Launch preview server with gitbook.

.PHONY: serve_with_gitbook
serve_with_gitbook:
	$(NPM_BIN_DIR)/gitbook serve
