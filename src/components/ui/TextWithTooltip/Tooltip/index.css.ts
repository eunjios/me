import { style } from '@vanilla-extract/css';

export const tooltip = style({
  transform: 'translateX(-50%)',
  top: '-24px',
  background: 'var(--color-bg-tooltip)',
  borderRadius: '8px',
  fontSize: '12px',
  fontWeight: 700,
  padding: '4px 6px',
  whiteSpace: 'nowrap',
  transition: 'left 0.2s ease-out, opacity 0.1s ease-out',
  willChange: 'left, opacity',
  pointerEvents: 'none',
  transitionProperty: 'opacity, visibility, left',
  transitionDuration: '0.1s, 0s, 0.2s',
  transitionDelay: '0s, 0.1s, 0s',
});
