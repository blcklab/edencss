# Changelog

## 1.0.0 - Stable Release

First stable release of EdenCSS.

### Added

- TypeScript-powered CSS generator
- Clean no-prefix utility class system
- Namespaced `--eden-*` CSS variables
- `data-eden-theme` theme support
- Mobile-first responsive utilities
- `sm-*`, `md-*`, `lg-*`, `xl-*`, and `xxl-*` breakpoint classes
- Layout helpers: `container`, `section`, `stack-y`, `stack-x`, `cluster`, `split`, `center`, `auto-grid`
- Spacing utilities for padding, margin, and gap
- Sizing and max-width utilities
- Typography utilities and fluid text helpers
- Color, gradient, border, radius, shadow, and glass utilities
- Display, flex, grid, position, overflow, and z-index utilities
- Accessibility helpers: `sr-only`, `focus-ring`, `touch`, `show-mobile`, `hide-mobile`
- Modular CSS imports
- Config API foundation
- CLI build entry
- Component foundation documentation
- Generic component foundation tokens for controls, surfaces, overlays, focus, motion, layering, and shared state

### Changed

- Utility classes are no longer prefixed.
- CSS variables now use the `--eden-*` namespace.
- Theme classes now use `eden-theme-*`.
- Responsive `2xl-*` utilities were renamed to `xxl-*` to keep unprefixed selectors valid and easy to read.


### Packaging

- Added top-level `style` metadata for CSS package discovery.
- Added repository, bugs, homepage, engines, and public publish metadata.
- Cleaned the published npm surface to include generated CSS, config API, CLI, docs, changelog, and license.
- Removed internal generator JavaScript and source maps from the published package contents.


### Maintainability guardrails

- Added architecture documentation.
- Added maintainability guide.
- Added contribution guide.
- Added generator/config/theme/token tests.
- Added `npm run check` release verification script.

### Packaging

- Replaced Vitest with the built-in Node test runner through `tsx --test` to avoid unnecessary Vite/esbuild development dependencies.
