# Core Concepts

## 1. Mobile-first by default

EdenCSS classes are designed for mobile first. Base classes apply to all screen sizes, then breakpoint classes enhance larger screens.

```html
<div class="stack-y md-stack-x gap-4">
  ...
</div>
```

This means:

```txt
mobile: vertical stack
tablet and up: horizontal stack
```

## 2. Clean class names

EdenCSS uses clean, unprefixed class names by default:

```html
<div class="container stack-y gap-y-4 p-4 rounded-xl"></div>
```

This improves readability but means EdenCSS should usually be the main utility system in the project.

## 3. Safe CSS variables

Class names are clean, but CSS variables are namespaced:

```css
--eden-primary
--eden-bg
--eden-text
--eden-space-4
--eden-radius-xl
```

This makes customization safer.

## 4. Layout helpers over class noise

EdenCSS includes high-value layout helpers:

```txt
container
section
stack-y
stack-x
cluster
split
center
auto-grid
```

These help build common layouts quickly.

## 5. Utility foundation, not component library

EdenCSS does not provide official components like Button, Modal, Header, or Dropdown. It provides the utilities and tokens needed to build them.

Example utility-built button:

```html
<button class="inline-flex items-center justify-center gap-x-2 px-4 py-2 rounded-lg bg-primary text-white font-semibold shadow-sm transition hover-lift touch">
  Get started
</button>
```

Future component packages can use EdenCSS as their design foundation.
