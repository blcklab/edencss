# Themes

EdenCSS themes are controlled through CSS variables and the `data-eden-theme` attribute.

## Default theme

Without a theme attribute, EdenCSS uses the default light variables.

```html
<html>
```

## Dark theme

```html
<html data-eden-theme="dark">
```

## Other themes

Depending on the generated build, EdenCSS may include themes such as:

```html
<html data-eden-theme="midnight">
<html data-eden-theme="cyber">
<html data-eden-theme="aurora">
```

## Switch theme with JavaScript

```js
document.documentElement.dataset.edenTheme = 'dark'
```

Reset to default:

```js
delete document.documentElement.dataset.edenTheme
```

## Customize theme variables

```css
:root {
  --eden-primary: #7c3aed;
  --eden-bg: #ffffff;
  --eden-text: #0f172a;
  --eden-radius-xl: 1.5rem;
}
```

Dark theme override:

```css
[data-eden-theme="dark"] {
  --eden-primary: #a78bfa;
  --eden-bg: #020617;
  --eden-text: #f8fafc;
}
```

## Component token customization

EdenCSS includes generic component tokens for future UI components or your own custom components.

```css
:root {
  --eden-control-height-md: 44px;
  --eden-control-radius: var(--eden-radius-lg);
  --eden-surface-radius: var(--eden-radius-xl);
  --eden-surface-shadow: var(--eden-shadow-md);
  --eden-overlay-bg: rgba(15, 23, 42, 0.56);
}
```
