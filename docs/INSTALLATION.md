# Installation

## npm

```bash
npm install @blcklab/edencss
```

## pnpm

```bash
pnpm add @blcklab/edencss
```

## yarn

```bash
yarn add @blcklab/edencss
```

## Import in JavaScript or TypeScript

```js
import '@blcklab/edencss'
```

or:

```js
import '@blcklab/edencss/edencss.css'
```

## Import in CSS

```css
@import "@blcklab/edencss/edencss.css";
```

## Import only selected modules

```js
import '@blcklab/edencss/tokens.css'
import '@blcklab/edencss/reset.css'
import '@blcklab/edencss/base.css'
import '@blcklab/edencss/layout.css'
import '@blcklab/edencss/spacing.css'
import '@blcklab/edencss/typography.css'
```

## Available CSS entry points

```txt
@blcklab/edencss
@blcklab/edencss/edencss.css
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

## Browser support

EdenCSS uses modern CSS features such as custom properties, flexbox, grid, `clamp()`, and `backdrop-filter` for glass effects. The core layout and utility classes work in modern browsers. Glass effects gracefully depend on browser support for `backdrop-filter`.
