# Colors and Backgrounds

EdenCSS color utilities are powered by CSS variables.

## Text color

```html
<p class="text-primary">Primary text</p>
<p class="text-muted">Muted text</p>
<p class="text-success">Success text</p>
<p class="text-warning">Warning text</p>
<p class="text-danger">Danger text</p>
```

## Background color

```html
<div class="bg-primary text-white p-4 rounded-lg">Primary surface</div>
<div class="bg-soft p-4 rounded-lg">Soft surface</div>
<div class="bg-dark text-white p-4 rounded-lg">Dark surface</div>
```

## Border utilities

```html
<div class="border rounded-lg p-4">Default border</div>
<div class="border-soft rounded-lg p-4">Soft border</div>
<div class="border-strong rounded-lg p-4">Strong border</div>
```

## Customize colors

```css
:root {
  --eden-primary: #7c3aed;
  --eden-success: #16a34a;
  --eden-warning: #f59e0b;
  --eden-danger: #dc2626;
  --eden-bg: #ffffff;
  --eden-text: #0f172a;
  --eden-muted: #64748b;
  --eden-border: #e2e8f0;
}
```

## Theme-aware colors

When using `data-eden-theme`, EdenCSS theme variables update automatically.

```html
<html data-eden-theme="dark">
```
