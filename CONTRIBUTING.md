# Contributing to EdenCSS

Thank you for helping improve EdenCSS.

## Development setup

```bash
npm install
npm run build
npm run typecheck
npm test
```

## Package checks

Before publishing or opening a release PR, run:

```bash
npm run check
```

## Project rules

```txt
Use TypeScript generators for repeated utilities.
Do not add required runtime JavaScript for styling.
Keep utility classes unprefixed in the default build.
Keep CSS variables namespaced as --eden-*.
Keep future component classes under eden-*.
Keep utilities mobile-first.
Add or update tests for generator changes.
Update docs when public classes, tokens, or exports change.
```

## Adding a utility

1. Add config values in `src/config/defaultConfig.ts` when needed.
2. Update `src/config/types.ts` when config shape changes.
3. Add or update a generator in `src/generators/`.
4. Use helper functions from `src/generators/utils.ts`.
5. Add tests.
6. Update documentation.
7. Run `npm run check`.

## Versioning

EdenCSS follows semantic versioning.

```txt
patch: bug fixes and docs
minor: new utilities/tokens/themes without breaking existing classes
major: class/token/export renames or removals
```
