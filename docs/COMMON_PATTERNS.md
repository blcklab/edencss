# Common Patterns

## Hero section

```html
<section class="container section stack-y gap-y-8 text-center">
  <div class="stack-y gap-y-3">
    <p class="text-primary font-semibold">EdenCSS</p>
    <h1 class="fluid-title text-gradient">Build clean interfaces faster.</h1>
    <p class="fluid-subtitle text-muted max-w-3xl mx-auto">
      A mobile-first CSS utility system for modern web apps.
    </p>
  </div>

  <div class="cluster justify-center gap-3">
    <a class="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary text-white font-semibold shadow-sm touch">
      Get started
    </a>
    <a class="inline-flex items-center justify-center px-4 py-2 rounded-lg border font-semibold touch">
      View docs
    </a>
  </div>
</section>
```

## Feature grid

```html
<section class="container section stack-y gap-y-8">
  <div class="stack-y gap-y-2 text-center">
    <h2 class="text-3xl font-bold">Features</h2>
    <p class="text-muted">Everything needed for clean layouts.</p>
  </div>

  <div class="auto-grid gap-4">
    <article class="glass rounded-xl p-5 shadow-md stack-y gap-y-2">
      <h3 class="text-xl font-bold">Mobile-first</h3>
      <p class="text-muted">Base utilities work on mobile first.</p>
    </article>
    <article class="glass rounded-xl p-5 shadow-md stack-y gap-y-2">
      <h3 class="text-xl font-bold">Themeable</h3>
      <p class="text-muted">Customize with CSS variables.</p>
    </article>
    <article class="glass rounded-xl p-5 shadow-md stack-y gap-y-2">
      <h3 class="text-xl font-bold">Modular</h3>
      <p class="text-muted">Import only the CSS modules you need.</p>
    </article>
  </div>
</section>
```

## App shell

```html
<div class="min-h-screen bg-body text-body">
  <header class="container py-4 split">
    <strong>EdenCSS</strong>
    <nav class="cluster gap-x-4 hide-mobile">
      <a>Home</a>
      <a>Docs</a>
      <a>GitHub</a>
    </nav>
  </header>

  <main class="container section">
    ...
  </main>
</div>
```

## Responsive card row

```html
<div class="stack-y md-stack-x gap-4">
  <article class="glass rounded-xl p-4 shadow-md">Card 1</article>
  <article class="glass rounded-xl p-4 shadow-md">Card 2</article>
</div>
```
