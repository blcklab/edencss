# EdenCSS User Documentation

EdenCSS is a lightweight, mobile-first CSS utility system for building clean, modern web interfaces.

This documentation pack is written for developers who want to install EdenCSS, use its utilities, customize the design tokens, apply themes, and build beautiful UI components with plain HTML, Vue, React, Angular, Laravel Blade, or any other framework.

## What EdenCSS gives you

- Clean utility classes with no class prefix by default
- Mobile-first responsive utilities
- Layout helpers such as `container`, `section`, `stack-y`, `split`, `cluster`, and `auto-grid`
- Spacing, sizing, typography, color, radius, shadow, glass, gradient, and animation utilities
- CSS variables under the `--eden-*` namespace
- Theme support through `data-eden-theme`
- Modular CSS imports so projects can import only what they need
- Zero runtime JavaScript required for styling

## Quick start

Install:

```bash
npm install @blcklab/edencss
```

Import the full stylesheet in your app entry:

```js
import '@blcklab/edencss'
```

Or import the explicit CSS file:

```js
import '@blcklab/edencss/edencss.css'
```

Use the classes:

```html
<section class="container section stack-y gap-y-8">
  <div class="stack-y gap-y-3">
    <p class="text-primary font-semibold">EdenCSS</p>
    <h1 class="fluid-title text-gradient">Build beautiful interfaces faster.</h1>
    <p class="fluid-subtitle text-muted">
      Mobile-first utilities for modern web apps.
    </p>
  </div>

  <div class="auto-grid gap-4">
    <article class="glass rounded-xl p-4 shadow-md">Card</article>
    <article class="glass rounded-xl p-4 shadow-md">Card</article>
    <article class="glass rounded-xl p-4 shadow-md">Card</article>
  </div>
</section>
```

## Documentation map

- [Getting Started](docs/GETTING_STARTED.md)
- [Installation](docs/INSTALLATION.md)
- [Core Concepts](docs/CORE_CONCEPTS.md)
- [Utility Reference](docs/UTILITIES.md)
- [Layout](docs/LAYOUT.md)
- [Spacing and Sizing](docs/SPACING_AND_SIZING.md)
- [Typography](docs/TYPOGRAPHY.md)
- [Colors and Backgrounds](docs/COLORS.md)
- [Effects, Glass, and Gradients](docs/EFFECTS.md)
- [Responsive Design](docs/RESPONSIVE.md)
- [Themes](docs/THEMING.md)
- [Customization](docs/CUSTOMIZATION.md)
- [Modular Imports](docs/MODULAR_IMPORTS.md)
- [Framework Usage](docs/FRAMEWORKS.md)
- [Building Components](docs/BUILDING_COMPONENTS.md)
- [Accessibility](docs/ACCESSIBILITY.md)
- [Common Patterns](docs/COMMON_PATTERNS.md)
- [Compatibility](docs/COMPATIBILITY.md)
- [FAQ](docs/FAQ.md)

## Important naming note

EdenCSS uses clean, unprefixed classes by default:

```html
<div class="container p-4 rounded-xl shadow-md"></div>
```

Because of this, EdenCSS is best used as the main utility foundation in a project. If a project already uses another utility framework such as Tailwind, class names may overlap.

CSS variables are namespaced safely:

```css
:root {
  --eden-primary: #2563eb;
  --eden-radius-lg: 1rem;
}
```

Themes are also namespaced:

```html
<html data-eden-theme="dark">
```

## License

MIT.
