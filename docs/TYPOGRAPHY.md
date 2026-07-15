# Typography

EdenCSS provides utility classes for readable, responsive text.

## Font families

```html
<p class="font-sans">Sans text</p>
<code class="font-mono">Code text</code>
```

The default font variables are:

```css
:root {
  --eden-font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --eden-font-mono: "JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}
```

EdenCSS does not bundle font files. Load your preferred font separately, then override the variable.

Example with Manrope:

```css
:root {
  --eden-font-sans: "Manrope", system-ui, sans-serif;
}
```

## Text sizes

```html
<p class="text-sm">Small text</p>
<p class="text-base">Base text</p>
<h2 class="text-3xl font-bold">Heading</h2>
```

Available sizes:

```txt
text-xs
text-sm
text-base
text-lg
text-xl
text-2xl
text-3xl
text-4xl
text-5xl
```

## Font weight

```txt
font-normal
font-medium
font-semibold
font-bold
font-black
```

## Line height

```txt
leading-tight
leading-normal
leading-relaxed
```

## Alignment

```txt
text-left
text-center
text-right
```

## Fluid titles

Use fluid typography for responsive hero text.

```html
<h1 class="fluid-title text-gradient">
  Build beautiful interfaces faster.
</h1>
```

```html
<p class="fluid-subtitle text-muted">
  A mobile-first CSS utility system for modern web apps.
</p>
```

## Text helpers

```html
<p class="truncate">Long text that should not wrap...</p>
<h1 class="balance">Balanced heading text for nicer line breaks</h1>
```
