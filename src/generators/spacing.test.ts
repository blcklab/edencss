import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { defaultConfig } from '../config/defaultConfig.js'
import { generateSpacing } from './spacing.js'

describe('generateSpacing', () => {
  it('generates x/y spacing utilities', () => {
    const css = generateSpacing(defaultConfig)

    assert.match(css, /\.px-4/)
    assert.match(css, /padding-left:1rem/)
    assert.match(css, /\.gap-y-4/)
    assert.match(css, /row-gap:1rem/)
  })
})
