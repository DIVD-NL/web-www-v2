# DIVD Website Development Guide

## Project Overview

This is the DIVD (Dutch Institute for Vulnerability Disclosure) website built with **Hugo static site generator** + **TypeScript** + **SCSS/Tailwind CSS**. Content is managed via **Sveltia CMS** (Decap/Netlify CMS fork) with bilingual support (EN/NL).

## Architecture

### Tech Stack
- **Hugo**: Static site generator with Go templates
- **Vite**: Build tool for CMS admin interface (`cms/`)
- **Tailwind + Custom SCSS**: Hybrid styling approach
- **TypeScript**: Interactive UI components in `assets/ts/`
- **Sveltia CMS**: Headless CMS configured in `cms/config.ts` ([LLM-friendly docs](https://sveltiacms.app/llms-full.txt))

### Key Directories
- `content/`: Markdown files for pages (with i18n: `*.en.md`, `*.nl.md`)
- `layouts/`: Hugo templates (`.html` files using Go templating)
- `layouts/partials/`: Reusable template components (heavily used)
- `cms/`: Vite-built CMS configuration and collections
- `assets/scss/`: SCSS modules imported via `screen.scss`
- `assets/ts/`: TypeScript for client-side interactions
- `static/`: Directly copied to output (fonts, etc.)
- `scripts/`: Node scripts for data generation

## Critical Workflows

### Development Environment
**Note**: Assume development servers are already running. Do NOT attempt to:
- Start Hugo server (`hugo server`)
- Run data generation (`npm run gen-people`)
- Start CMS dev server (`npm run cms`)

The user will have already initialized the development environment.

### Available Commands (Reference Only)
```bash
# Data generation (already completed by user)
npm run gen-people      # Generates people from Google Sheets
npm run update-stats    # Fetches CSIRT stats

# CMS build
npm run cms-build       # Builds CMS to admin/new-cms/
```

### Build Pipeline (CI)
1. `npm run gen-people` (Google Sheets → people JSON + markdown)
2. `npm run update-stats` (fetch CSIRT stats)
3. `npm run cms-build` (build CMS admin)
4. `hugo --minify` (static site generation)

**Note**: `npm run gen-teams` is deprecated and no longer used.

### Data Generation
- **People data**: `scripts/generate_people/` pulls from Google Sheets/Drive (requires `GOOGLE_SERVICE_ACCOUNT`, `GOOGLE_SHEET_ID` env vars)
- **Teams data**: ~~`scripts/generate_teams.js`~~ (deprecated - no longer used)
- Output: `content/who-we-are/team/people/*.md` + `assets/documents/people.json`

## Hugo-Specific Patterns

### Partial Convention
Most layouts use `{{ partial "p/section_open" }}` / `{{ partial "p/section_close" }}` wrappers:
- `section_open/close`: Full-width content sections with classes
- `layout_open/close`: Inner layout containers
- Example: `layouts/people/single.html` uses multiple nested partials

### Image Handling
Use `{{ partial "tools/rimg/img" (dict "img" . "alt" "text") }}` for responsive images with WebP conversion and automatic srcset generation.

### i18n
- Translations: `i18n/en.yaml`, `i18n/nl.yaml`
- Use `{{ i18n "key" }}` in templates
- Content files: `_index.en.md` / `_index.nl.md` structure
- URL structure: `/en/path` or `/nl/path` (controlled by `hugo.yaml`)

## Styling System

### Hybrid Approach
1. **Tailwind classes**: Used in `layouts/**/*.html` templates
2. **Custom SCSS**: Component-specific styles in `assets/scss/ui/`
3. **Import order** (in `screen.scss`):
   - Reset → Tailwind base → Fonts/Typography → UI components → Tailwind utilities

### Color Variables
Defined in both:
- `tailwind.config.js`: `DIVD-yellow`, `DIVD-turquoise`, etc.
- `assets/scss/variables.scss`: SCSS counterparts

### Typography
Custom font sizes in `tailwind.config.js` (e.g., `heading-1`, `heading-2`, `body`) with specific line-height/letter-spacing.

## CMS Configuration

### Dual Configuration System
The repository has **two CMS configurations**:
1. **Old (YAML)**: `admin/config.yml` and environment-specific configs in `admin/development/`, `admin/staging/`
2. **New (TypeScript)**: `cms/config.ts` with collections in `cms/collections.ts` and `layouts/*/collection.ts`

**Migration workflow**: When asked to migrate configuration to the new CMS:
1. Read the old YAML config from `admin/config.yml` (or environment-specific variants)
2. Verify compatibility with Sveltia CMS using [docs](https://sveltiacms.app/llms-full.txt)
3. Convert to TypeScript format in `cms/` directory structure
4. Ensure collection definitions are split appropriately (global in `cms/collections.ts`, content-type-specific in `layouts/*/collection.ts`)

### Collection Definitions
- Located in `cms/collections.ts` and `layouts/*/collection.ts`
- Example: `layouts/newsroom/collection.ts` defines article fields
- Content stored in `content/newsroom/articles/*.en.md` and `*.nl.md`

### Local CMS Development
CMS runs on Vite dev server (port 5173) with `local_backend: true` for local git workflow. Assume the server is already running if user is working on CMS-related features.

## Common Gotchas

1. **People data dependency**: Site requires generated people data (user will have already run `npm run gen-people`)
2. **Partials are cached**: Hugo caches partials - clear with `rm -rf ./public/*` if needed
3. **SCSS changes**: Hugo watches `assets/scss/` but rebuild may be needed
4. **TypeScript**: Compiled by Hugo's asset pipeline (not Vite)
5. **Content Security Policy**: Strict CSP in `hugo.yaml` - update for new external resources
6. **Development servers**: Assume Hugo and CMS servers are already running - don't try to start them

## Testing

- HTML validation: Commented out in CI (`.github/workflows/build_pages_native.yml`)
- Production test: `./serve.py` serves built site on port 8000
- Proof script: `./proof_html.sh` (check implementation for details)

## Key Files to Reference

- `hugo.yaml`: Site config, CSP headers, i18n setup
- `vite.config.mts`: CMS build configuration
- `tailwind.config.js`: Design tokens and typography
- `layouts/_default/baseof.html`: Base template structure
- `assets/scss/screen.scss`: SCSS import order
- `cms/config.ts`: CMS backend and media configuration
