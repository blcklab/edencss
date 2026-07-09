import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { defaultConfig } from '../config/defaultConfig.js'
import { generateTokens } from './tokens.js'

describe('generateTokens', () => {
  it('generates stable EdenCSS token names', () => {
    const css = generateTokens(defaultConfig)

    assert.match(css, /--eden-primary/)
    assert.match(css, /--eden-space-4/)
    assert.match(css, /--eden-radius-xl/)
    assert.match(css, /--eden-control-height-md/)
    assert.match(css, /--eden-surface-radius/)
    assert.match(css, /--eden-overlay-bg/)
    assert.match(css, /--eden-motion-normal/)
    assert.doesNotMatch(css, /--ax-/)
    assert.doesNotMatch(css, /--ex-/)
  })
})
