# Responsive Design

EdenCSS is mobile-first. Base utilities apply first, then breakpoint utilities enhance larger screens.

## Breakpoints

```txt
sm  = small screens and up
md  = tablets and up
lg  = laptops and up
xl  = large desktops and up
xxl = extra large screens and up
```

`xxl` is used instead of `2xl` so the CSS selector does not start with a number.

## Example

```html
<div class="stack-y md-stack-x gap-4">
  <aside>Sidebar</aside>
  <main>Main content</main>
</div>
```

Meaning:

```txt
mobile: stack vertically
md and up: stack horizontally
```

## Responsive grid

```html
<div class="grid grid-1 md-grid-2 lg-grid-3 gap-4">
  <article>Card</article>
  <article>Card</article>
  <article>Card</article>
</div>
```

## Responsive split

```html
<header class="stack-y md-split gap-4">
  <strong>Brand</strong>
  <nav class="cluster gap-x-4">...</nav>
</header>
```

## Show and hide on mobile

```html
<nav class="hide-mobile">Desktop nav</nav>
<button class="show-mobile touch">Menu</button>
```

## Recommended mobile-first habit

Start with the mobile layout first:

```html
<section class="stack-y gap-y-6">
```

Then add larger-screen behavior:

```html
<section class="stack-y md-stack-x lg-split gap-6">
```
