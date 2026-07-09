import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { defaultConfig } from '../config/defaultConfig.js'
import { cls, rule } from './utils.js'

const prefixedConfig = {
  ...defaultConfig,
  prefix: 'e',
}

describe('generator utilities', () => {
  it('generates clean unprefixed class selectors by default', () => {
    assert.equal(cls(defaultConfig, 'container'), '.container')
    assert.equal(cls(defaultConfig, 'gap-y-4'), '.gap-y-4')
  })

  it('can still generate prefixed selectors for future custom builds', () => {
    assert.equal(cls(prefixedConfig, 'container'), '.e-container')
    assert.equal(cls(prefixedConfig, 'gap-y-4'), '.e-gap-y-4')
  })

  it('supports important declarations through config', () => {
    const css = rule('.p-4', { padding: '1rem' }, { ...defaultConfig, important: true })

    assert.match(css, /padding:1rem !important/)
  })
})
