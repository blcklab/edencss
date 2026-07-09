import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { defaultConfig } from '../config/defaultConfig.js'
import { generateThemes } from './themes.js'

describe('generateThemes', () => {
  it('generates namespaced theme variables and selectors', () => {
    const css = generateThemes(defaultConfig)

    assert.match(css, /\[data-eden-theme="dark"\]/)
    assert.match(css, /\.eden-theme-dark/)
    assert.match(css, /--eden-bg/)
    assert.doesNotMatch(css, /data-axis-theme/)
    assert.doesNotMatch(css, /--ax-/)
    assert.doesNotMatch(css, /--ex-/)
  })
})
