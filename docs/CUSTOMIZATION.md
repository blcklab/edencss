# Customization

EdenCSS is customized through CSS variables.

## Brand color

```css
:root {
  --eden-primary: #7c3aed;
}
```

## Font

Load your font, then override the font variable.

```css
:root {
  --eden-font-sans: "Plus Jakarta Sans", system-ui, sans-serif;
}
```

## Radius

```css
:root {
  --eden-radius-md: 0.75rem;
  --eden-radius-lg: 1rem;
  --eden-radius-xl: 1.5rem;
}
```

## Shadows

```css
:root {
  --eden-shadow-md: 0 16px 40px rgba(15, 23, 42, 0.14);
}
```

## Container width

```css
:root {
  --eden-container: 1180px;
}
```

## Auto grid minimum width

Per element:

```html
<div class="auto-grid gap-4" style="--eden-grid-min: 280px">
  ...
</div>
```

Global:

```css
:root {
  --eden-grid-min: 240px;
}
```

## Component foundation tokens

Use generic tokens for custom components:

```css
.my-button {
  min-height: var(--eden-control-height-md);
  padding-inline: var(--eden-control-padding-x-md);
  border-radius: var(--eden-control-radius);
  transition-duration: var(--eden-motion-normal);
}

.my-card {
  background: var(--eden-surface-bg);
  color: var(--eden-surface-text);
  border: 1px solid var(--eden-surface-border);
  border-radius: var(--eden-surface-radius);
  box-shadow: var(--eden-surface-shadow);
  padding: var(--eden-surface-padding);
}
```
