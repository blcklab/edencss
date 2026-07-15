# Building Components with EdenCSS

EdenCSS is a utility foundation. It helps you build beautiful components, but it does not ship official components by itself.

## Utility-built button

```html
<button class="inline-flex items-center justify-center gap-x-2 px-4 py-2 rounded-lg bg-primary text-white font-semibold shadow-sm transition hover-lift touch focus-ring">
  Get started
</button>
```

## Utility-built card

```html
<article class="glass rounded-xl p-6 shadow-md stack-y gap-y-3">
  <h3 class="text-xl font-bold">Modern Card</h3>
  <p class="text-muted">Built with EdenCSS utilities.</p>
</article>
```

## Reusable custom component class

For reusable app components, combine EdenCSS tokens with your own class.

```css
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--eden-space-2);
  min-height: var(--eden-control-height-md);
  padding-inline: var(--eden-control-padding-x-md);
  border-radius: var(--eden-control-radius);
  background: var(--eden-primary);
  color: var(--eden-primary-text, #ffffff);
  font-weight: 600;
  transition: transform var(--eden-motion-normal) var(--eden-ease-out);
}

.app-button:hover {
  transform: translateY(-1px);
}
```

## Generic component tokens

EdenCSS includes generic component foundation tokens:

```txt
--eden-control-*
--eden-surface-*
--eden-overlay-*
--eden-focus-*
--eden-motion-*
--eden-z-*
--eden-state-*
```

These are intentionally generic. They can support buttons, inputs, cards, modals, drawers, dropdowns, toasts, and other future components without making EdenCSS a component library.

## Recommended component naming

For your own component classes, use a project-specific prefix:

```css
.app-card {}
.app-button {}
```

For future Eden/Blcklab components, component classes can use:

```txt
eden-button
eden-card
eden-modal
eden-header
```

Utilities stay clean and unprefixed:

```txt
container
p-4
rounded-xl
shadow-md
```
