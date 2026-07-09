# EdenCSS

A lightweight, mobile-first CSS utility system for building clean, modern web interfaces.

EdenCSS gives you practical utilities for layout, spacing, typography, colors, themes, gradients, glass effects, responsive design, and accessibility helpers. It ships as plain CSS, so it works with any framework or no framework at all.

```html
<section class="container section stack-y gap-y-8">
  <div class="stack-y gap-y-3">
    <h1 class="fluid-title text-gradient">Build beautiful interfaces faster.</h1>
    <p class="fluid-subtitle text-muted">Mobile-first utilities for modern web apps.</p>
  </div>

  <div class="auto-grid gap-4">
    <article class="glass rounded-xl p-4 shadow-md">Card</article>
    <article class="glass rounded-xl p-4 shadow-md">Card</article>
    <article class="glass rounded-xl p-4 shadow-md">Card</article>
  </div>
</section>
```

## Features

- Mobile-first utility classes
- CSS variables for customization
- Modular CSS imports
- Responsive layout helpers
- Typography and fluid text utilities
- Color, gradient, glass, radius, and shadow utilities
- Theme support with `data-eden-theme`
- Generic component tokens for future UI systems
- Zero runtime JavaScript for styling
- Framework agnostic

## Install

```bash
npm install @blcklab/edencss
```

## Usage

Import the full CSS bundle in your app entry file:

```js
import '@blcklab/edencss'
```

Or import the explicit CSS file:

```js
import '@blcklab/edencss/edencss.css'
```

In a CSS file, use `@import`:

```css
@import "@blcklab/edencss/edencss.css";
```

## Framework examples

### Vue

```js
import { createApp } from 'vue'
import App from './App.vue'
import '@blcklab/edencss'

createApp(App).mount('#app')
```

### React

```jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import '@blcklab/edencss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />)
```

### Angular

Add it to `src/styles.css`:

```css
@import "@blcklab/edencss/edencss.css";
```

## Quick layout

```html
<header class="container py-4 split md-row">
  <strong class="text-xl font-bold text-gradient">EdenCSS</strong>

  <nav class="cluster gap-x-4 hide-mobile">
    <a href="#features">Features</a>
    <a href="#docs">Docs</a>
    <a href="#start">Start</a>
  </nav>
</header>

<main class="container section stack-y gap-y-10">
  <section class="stack-y gap-y-4 text-center">
    <h1 class="fluid-title text-gradient">Modern CSS utilities.</h1>
    <p class="fluid-subtitle text-muted">Simple, responsive, themeable, and framework-agnostic.</p>
  </section>

  <section class="auto-grid gap-4">
    <article class="glass rounded-xl p-5 shadow-md stack-y gap-y-2">
      <h2 class="text-xl font-bold">Mobile-first</h2>
      <p class="text-muted">Start with mobile layouts and enhance at larger breakpoints.</p>
    </article>

    <article class="glass rounded-xl p-5 shadow-md stack-y gap-y-2">
      <h2 class="text-xl font-bold">Themeable</h2>
      <p class="text-muted">Customize global tokens with CSS variables.</p>
    </article>
  </section>
</main>
```

## Themes

Use the `data-eden-theme` attribute:

```html
<html data-eden-theme="dark">
  ...
</html>
```

Available themes:

```html
<html data-eden-theme="light">
<html data-eden-theme="dark">
<html data-eden-theme="midnight">
<html data-eden-theme="cyber">
<html data-eden-theme="aurora">
```

You can also use theme classes:

```html
<body class="eden-theme-dark">
  ...
</body>
```

## Customization

Override EdenCSS variables in your own CSS:

```css
:root {
  --eden-primary: #7c3aed;
  --eden-radius-lg: 18px;
  --eden-font-sans: "Manrope", system-ui, sans-serif;
}
```

## Modular imports

Import only the layers you need:

```js
import '@blcklab/edencss/tokens.css'
import '@blcklab/edencss/layout.css'
import '@blcklab/edencss/spacing.css'
import '@blcklab/edencss/typography.css'
```

Available CSS modules:

```txt
@blcklab/edencss/reset.css
@blcklab/edencss/tokens.css
@blcklab/edencss/base.css
@blcklab/edencss/layout.css
@blcklab/edencss/spacing.css
@blcklab/edencss/sizing.css
@blcklab/edencss/typography.css
@blcklab/edencss/colors.css
@blcklab/edencss/effects.css
@blcklab/edencss/themes.css
@blcklab/edencss/utilities.css
```

`tokens.css` should usually be imported first because other modules rely on EdenCSS variables.

## Class naming

EdenCSS uses clean, unprefixed utilities:

```html
<div class="container stack-y gap-y-4 p-4 rounded-xl glass">
  ...
</div>
```

CSS variables remain namespaced:

```css
--eden-primary
--eden-space-4
--eden-radius-xl
```

Theme selectors are also namespaced:

```html
<html data-eden-theme="dark">
```

Future component classes should use the `eden-` namespace:

```html
<button class="eden-btn">Save</button>
```

## Important note about other utility frameworks

EdenCSS is designed to be used as a standalone utility system. Since classes are unprefixed, names such as `container`, `p-4`, `text-sm`, `rounded-xl`, and `shadow-md` may conflict with other utilities, or custom project CSS.

Use EdenCSS as your main utility foundation, not on top of another utility framework.

## Documentation

- [Getting Started](docs/GETTING_STARTED.md)
- [Utilities](docs/UTILITIES.md)
- [Layout](docs/LAYOUT.md)
- [Responsive Design](docs/RESPONSIVE.md)
- [Theming](docs/THEMING.md)
- [Modular Imports](docs/MODULAR_IMPORTS.md)
- [Component Foundation](docs/COMPONENT_FOUNDATION.md)
- [FAQ](docs/FAQ.md)

## Package contents

```txt
@blcklab/edencss
├─ dist/
│  ├─ edencss.css
│  ├─ reset.css
│  ├─ tokens.css
│  ├─ base.css
│  ├─ layout.css
│  ├─ spacing.css
│  ├─ sizing.css
│  ├─ typography.css
│  ├─ colors.css
│  ├─ effects.css
│  ├─ themes.css
│  └─ utilities.css
├─ docs/
├─ README.md
├─ CHANGELOG.md
├─ CONTRIBUTING.md
├─ LICENSE
└─ package.json
```

## Development

```bash
npm install
npm run build
npm test
npm run check
```

## License

MIT
