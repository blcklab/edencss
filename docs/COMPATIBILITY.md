# Compatibility

## Can EdenCSS be used with Tailwind?

It is not recommended as a default setup.

EdenCSS uses clean, unprefixed utility names such as:

```txt
container
p-4
text-sm
rounded-xl
shadow-md
```

These names can overlap with Tailwind or other utility systems.

Recommended approach:

```txt
Use EdenCSS as the main utility foundation in the project.
```

## Can EdenCSS be used with Bootstrap?

It can be used, but class names such as `container` may overlap. Use caution when mixing CSS systems.

## Is EdenCSS framework-specific?

No. EdenCSS is plain CSS and works with Vue, React, Angular, Svelte, Laravel Blade, plain HTML, and other frameworks.

## Does EdenCSS require JavaScript?

No. EdenCSS requires zero runtime JavaScript for styling.

## Does EdenCSS bundle fonts?

No. EdenCSS defines font stacks through CSS variables but does not bundle font files. Load the font you want separately.
