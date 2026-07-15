# Framework Usage

EdenCSS is plain CSS, so it works with any framework.

## Vue 3

```js
import { createApp } from 'vue'
import App from './App.vue'

import '@blcklab/edencss'

createApp(App).mount('#app')
```

## Vue 2

```js
import Vue from 'vue'
import App from './App.vue'

import '@blcklab/edencss'

new Vue({
  render: h => h(App),
}).$mount('#app')
```

## React

```jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import '@blcklab/edencss'

createRoot(document.getElementById('root')).render(<App />)
```

## Angular

Import in `src/styles.css`:

```css
@import "@blcklab/edencss/edencss.css";
```

Or add the file to the Angular styles configuration.

## Svelte

```js
import '@blcklab/edencss'
```

## Laravel / Blade with Vite

In your app entry:

```js
import '@blcklab/edencss'
```

Then use classes in Blade:

```html
<section class="container section stack-y gap-y-8">
  ...
</section>
```

## Plain HTML

Use a bundled CSS file from your build output, or copy the compiled CSS into your project.
