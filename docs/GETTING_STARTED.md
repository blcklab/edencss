# Getting Started

EdenCSS is designed to be easy to start with. Install it, import one CSS file, and use utility classes in your markup.

## Install

```bash
npm install @blcklab/edencss
```

## Import

In a JavaScript or TypeScript entry file:

```js
import '@blcklab/edencss'
```

Or import the explicit stylesheet:

```js
import '@blcklab/edencss/edencss.css'
```

In a CSS file:

```css
@import "@blcklab/edencss/edencss.css";
```

## First layout

```html playground
<main class="container section stack-y gap-y-8">
  <header class="stack-y gap-y-3 text-center">
    <p class="text-primary font-semibold">Modern CSS utilities</p>
    <h1 class="fluid-title text-gradient">Welcome to EdenCSS</h1>
    <p class="fluid-subtitle text-muted">
      Build responsive interfaces with clean utility classes.
    </p>
  </header>

  <div class="auto-grid gap-4">
    <article class="glass rounded-xl p-4 shadow-md">
      <h2 class="text-xl font-bold">Layout</h2>
      <p class="text-muted">Use stack, split, cluster, and auto-grid helpers.</p>
    </article>

    <article class="glass rounded-xl p-4 shadow-md">
      <h2 class="text-xl font-bold">Theme</h2>
      <p class="text-muted">Customize with CSS variables and theme attributes.</p>
    </article>
  </div>
</main>
```

## Add dark mode

```html
<html data-eden-theme="dark">
```

Or switch it with JavaScript:

```js
document.documentElement.dataset.edenTheme = 'dark'
```

## Use modular imports

For smaller builds, import only the parts you need:

```js
import '@blcklab/edencss/tokens.css'
import '@blcklab/edencss/layout.css'
import '@blcklab/edencss/spacing.css'
import '@blcklab/edencss/typography.css'
```

Most modules use CSS variables, so `tokens.css` should usually be imported first.
