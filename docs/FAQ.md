# FAQ

## What is EdenCSS?

EdenCSS is a lightweight, mobile-first CSS utility system for building modern interfaces.

## Is EdenCSS a component library?

No. EdenCSS is a utility foundation. It helps you build components, but it does not ship official components like Button, Modal, or Header.

## Does EdenCSS require JavaScript?

No. EdenCSS styling is plain CSS. There is no required runtime JavaScript.

## Can I use it with Vue, React, or Angular?

Yes. Import the CSS once in your app entry or global stylesheet.

## Can I use my own font?

Yes. Load your font and override the variable:

```css
:root {
  --eden-font-sans: "Manrope", system-ui, sans-serif;
}
```

## Can I customize colors?

Yes:

```css
:root {
  --eden-primary: #7c3aed;
}
```

## Can I use EdenCSS with Tailwind?

It is not recommended because class names can overlap. EdenCSS is best used as the main utility foundation.

## Why are classes not prefixed?

Clean class names improve readability and developer experience. CSS variables and themes remain namespaced with `--eden-*` and `data-eden-theme`.

## How do I import only what I need?

Use modular imports:

```js
import '@blcklab/edencss/tokens.css'
import '@blcklab/edencss/layout.css'
import '@blcklab/edencss/spacing.css'
```

## Why should tokens.css be imported first?

Other modules use variables from `tokens.css`, such as `--eden-space-4` and `--eden-primary`.

## Is EdenCSS lightweight?

Yes. It has no runtime JavaScript and supports modular CSS imports.
