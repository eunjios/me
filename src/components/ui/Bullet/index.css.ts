import { style } from '@vanilla-extract/css';

export const ul = style({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
});

export const li = style({
  position: 'relative',
  paddingLeft: '28px',
  marginBottom: '8px',
  ':before': {
    content: '"•"',
    position: 'absolute',
    left: '8px',
    color: 'var(--color-text-secondary)',
    fontSize: 'var(--font-size-l)',
  },
});
