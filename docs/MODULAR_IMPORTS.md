# Modular Imports

EdenCSS can be imported as one full stylesheet or as separate CSS modules.

## Full import

```js
import '@blcklab/edencss'
```

or:

```js
import '@blcklab/edencss/edencss.css'
```

Use full import when you want the easiest setup.

## Modular import

```js
import '@blcklab/edencss/tokens.css'
import '@blcklab/edencss/reset.css'
import '@blcklab/edencss/base.css'
import '@blcklab/edencss/layout.css'
import '@blcklab/edencss/spacing.css'
import '@blcklab/edencss/typography.css'
```

Use modular imports when you want to include only specific utility groups.

## Available modules

```txt
tokens.css      CSS variables and design tokens
reset.css       browser reset
base.css        base body/form styles
layout.css      container, section, stack, split, cluster, grid
spacing.css     padding, margin, gap utilities
sizing.css      width, height, max-width utilities
typography.css  font, text size, weight, alignment, line-height
colors.css      text, background, border color utilities
effects.css     radius, shadow, glass, gradients, motion
themes.css      theme variable overrides
utilities.css   combined utility modules without reset/base/tokens
edencss.css     complete full build
```

## Recommended minimal layout import

```js
import '@blcklab/edencss/tokens.css'
import '@blcklab/edencss/layout.css'
import '@blcklab/edencss/spacing.css'
```

## Recommended UI import

```js
import '@blcklab/edencss/tokens.css'
import '@blcklab/edencss/reset.css'
import '@blcklab/edencss/base.css'
import '@blcklab/edencss/layout.css'
import '@blcklab/edencss/spacing.css'
import '@blcklab/edencss/typography.css'
import '@blcklab/edencss/colors.css'
import '@blcklab/edencss/effects.css'
```

## Important

Most modules depend on variables from `tokens.css`, so import `tokens.css` first when using modular imports.
