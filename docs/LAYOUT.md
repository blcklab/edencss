# Layout

EdenCSS includes practical layout helpers for common web interfaces.

## Container

```html
<div class="container">
  ...
</div>
```

`container` centers content and limits the maximum width while keeping mobile padding.

## Section

```html
<section class="section">
  ...
</section>
```

Use `section` for vertical page spacing.

## Stack

Use `stack-y` for vertical layout:

```html
<div class="stack-y gap-y-4">
  <h2>Title</h2>
  <p>Description</p>
  <button>Action</button>
</div>
```

Use `stack-x` for horizontal layout:

```html
<div class="stack-x gap-x-3 items-center">
  <span>Avatar</span>
  <span>Name</span>
</div>
```

## Responsive stack

```html
<div class="stack-y md-stack-x gap-4">
  <aside>Sidebar</aside>
  <main>Content</main>
</div>
```

Mobile is vertical. Tablet and larger screens become horizontal.

## Cluster

Use `cluster` for wrapping inline content such as tags, actions, or navigation.

```html
<nav class="cluster gap-x-4 gap-y-2">
  <a>Home</a>
  <a>Docs</a>
  <a>GitHub</a>
</nav>
```

## Split

Use `split` for layouts where content should sit at opposite ends.

```html
<header class="split gap-4">
  <strong>EdenCSS</strong>
  <nav class="cluster gap-x-4">...</nav>
</header>
```

For mobile-first headers, combine stack and responsive split:

```html
<header class="stack-y md-split gap-4">
  <strong>EdenCSS</strong>
  <nav class="cluster gap-x-4">...</nav>
</header>
```

## Center

```html
<div class="center min-h-screen">
  <div class="glass rounded-xl p-6">Centered content</div>
</div>
```

## Auto grid

`auto-grid` creates a responsive grid that adapts to available width.

```html
<div class="auto-grid gap-4">
  <article class="glass rounded-xl p-4">Card</article>
  <article class="glass rounded-xl p-4">Card</article>
  <article class="glass rounded-xl p-4">Card</article>
</div>
```

Customize the minimum card width:

```html
<div class="auto-grid gap-4" style="--eden-grid-min: 280px">
  ...
</div>
```
