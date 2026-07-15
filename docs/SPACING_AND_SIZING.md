# Spacing and Sizing

EdenCSS spacing utilities use a consistent scale based on CSS variables.

## Padding

```html
<div class="p-4">All sides</div>
<div class="px-4">Left and right</div>
<div class="py-4">Top and bottom</div>
```

## Margin

```html
<div class="m-4">All sides</div>
<div class="mx-auto">Centered block</div>
<div class="my-8">Vertical margin</div>
```

## Gap

```html
<div class="stack-y gap-y-4">
  ...
</div>

<div class="cluster gap-x-4 gap-y-2">
  ...
</div>
```

## Why x/y names?

EdenCSS uses `x` for horizontal and `y` for vertical:

```txt
px = padding left/right
py = padding top/bottom
mx = margin left/right
my = margin top/bottom
gap-x = column gap
gap-y = row gap
```

## Sizing

```html
<div class="w-full max-w-4xl mx-auto">
  ...
</div>
```

Common sizing utilities:

```txt
w-full
w-screen
h-full
h-screen
min-h-screen
max-w-sm
max-w-md
max-w-lg
max-w-xl
max-w-2xl
max-w-3xl
max-w-4xl
max-w-5xl
max-w-6xl
max-w-7xl
```

## Customize spacing globally

```css
:root {
  --eden-space-4: 1.125rem;
  --eden-space-8: 2.25rem;
}
```
