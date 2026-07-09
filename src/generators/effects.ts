import type { EdenConfig } from '../config/types.js'
import { cls, layer, rule } from './utils.js'

export function generateEffects(config: EdenConfig): string {
  let css = ''

  css += rule(cls(config, 'glass'), { background: 'rgba(255,255,255,0.72)', border: '1px solid rgba(255,255,255,0.42)', 'backdrop-filter': 'blur(16px) saturate(160%)', '-webkit-backdrop-filter': 'blur(16px) saturate(160%)', 'box-shadow': 'var(--eden-shadow-md)' }, config)
  css += rule(cls(config, 'glass-dark'), { background: 'rgba(15,23,42,0.72)', color: '#f8fafc', border: '1px solid rgba(255,255,255,0.12)', 'backdrop-filter': 'blur(16px) saturate(160%)', '-webkit-backdrop-filter': 'blur(16px) saturate(160%)', 'box-shadow': 'var(--eden-shadow-md)' }, config)
  css += rule(cls(config, 'glass-soft'), { background: 'rgba(255,255,255,0.52)', border: '1px solid rgba(255,255,255,0.32)', 'backdrop-filter': 'blur(10px) saturate(140%)', '-webkit-backdrop-filter': 'blur(10px) saturate(140%)' }, config)
  css += rule(cls(config, 'glass-strong'), { background: 'rgba(255,255,255,0.82)', border: '1px solid rgba(255,255,255,0.52)', 'backdrop-filter': 'blur(24px) saturate(180%)', '-webkit-backdrop-filter': 'blur(24px) saturate(180%)', 'box-shadow': 'var(--eden-shadow-lg)' }, config)

  css += rule(cls(config, 'transition'), { transition: 'color 180ms ease,background-color 180ms ease,border-color 180ms ease,opacity 180ms ease,transform 180ms ease,box-shadow 180ms ease' }, config)
  css += `${cls(config, 'hover-lift')}:hover{transform:translateY(-2px);}\n`
  css += `${cls(config, 'hover-scale')}:hover{transform:scale(1.02);}\n`

  css += rule(cls(config, 'fade-in'), { animation: 'eden-fade-in 220ms ease both' }, config)
  css += rule(cls(config, 'slide-up'), { animation: 'eden-slide-up 260ms ease both' }, config)
  css += rule(cls(config, 'pop-in'), { animation: 'eden-pop-in 220ms cubic-bezier(.2,.8,.2,1) both' }, config)

  for (const [key, value] of Object.entries(config.opacity)) css += rule(cls(config, `opacity-${key}`), { opacity: value }, config)

  css += '@keyframes eden-fade-in{from{opacity:0;}to{opacity:1;}}\n'
  css += '@keyframes eden-slide-up{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}\n'
  css += '@keyframes eden-pop-in{from{opacity:0;transform:scale(.96);}to{opacity:1;transform:scale(1);}}\n'
  const reduceMotionSelectors = [cls(config, 'transition'), cls(config, 'fade-in'), cls(config, 'slide-up'), cls(config, 'pop-in')].join(',')
  css += `@media (prefers-reduced-motion:reduce){${reduceMotionSelectors}{animation:none!important;transition:none!important;}}\n`

  return layer('eden-utilities', css)
}
