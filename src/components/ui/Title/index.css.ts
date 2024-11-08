import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  padding: '24px 0',
});

export const text = style({
  lineHeight: '40px',
});

export const underline = style({
  '::after': {
    content: '',
    position: 'absolute',
    bottom: '-4px',
    left: 0,
    width: '100%',
    height: '16px',
    background: 'var(--color-primary-1)',
    zIndex: -1,
  },
});
