import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { defaultConfig } from '../config/defaultConfig.js'
import { generateTokens } from './tokens.js'

describe('component foundation tokens', () => {
  it('generates only generic component token families', () => {
    const css = generateTokens(defaultConfig)

    assert.match(css, /--eden-control-height-md/)
    assert.match(css, /--eden-surface-bg/)
    assert.match(css, /--eden-overlay-bg/)
    assert.match(css, /--eden-focus-color/)
    assert.match(css, /--eden-z-modal/)
    assert.doesNotMatch(css, /--eden-btn-height/)
    assert.doesNotMatch(css, /--eden-card-padding/)
  })
})
