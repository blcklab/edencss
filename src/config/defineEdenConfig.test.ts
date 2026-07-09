import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { defineEdenConfig } from './defineEdenConfig.js'

describe('defineEdenConfig', () => {
  it('deep merges user config with defaults', () => {
    const config = defineEdenConfig({
      colors: {
        primary: '#8b5cf6',
      },
      modules: {
        gradients: false,
      },
    })

    assert.equal(config.colors.primary, '#8b5cf6')
    assert.equal(config.colors.success, '#16a34a')
    assert.equal(config.modules.gradients, false)
    assert.equal(config.modules.spacing, true)
  })

  it('allows future custom prefix builds without changing default behavior', () => {
    const config = defineEdenConfig({ prefix: 'e' })

    assert.equal(config.prefix, 'e')
  })
})
