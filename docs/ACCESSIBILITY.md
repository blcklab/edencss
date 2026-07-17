# Accessibility

EdenCSS includes small accessibility helpers, but accessible UI also depends on semantic HTML and component behavior.

## Screen-reader-only content

```html
<span class="sr-only">Open menu</span>
```

Use this when an icon-only button needs accessible text.

## Focus ring

```html playground
<button class="focus-ring touch">
  Save
</button>
```

`focus-ring` improves keyboard focus visibility.

## Touch targets

```html
<button class="touch">
  Menu
</button>
```

`touch` provides a comfortable mobile tap target.

## Reduced motion

Use motion utilities carefully. Avoid relying on animation for meaning.

## Semantic HTML

Prefer semantic elements:

```html
<button>Submit</button>
<nav>...</nav>
<header>...</header>
<main>...</main>
```

Avoid using clickable `<div>` elements when a `<button>` or `<a>` is correct.

## Color contrast

When customizing themes, make sure text and background colors have enough contrast.

Example:

```css
[data-eden-theme="dark"] {
  --eden-bg: #020617;
  --eden-text: #f8fafc;
  --eden-muted: #cbd5e1;
}
```
