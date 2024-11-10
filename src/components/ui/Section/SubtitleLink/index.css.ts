import { style } from '@vanilla-extract/css';

export const link = style({
  display: 'block',
  gap: '4px',
  alignItems: 'center',
  borderBottom: '2px dashed var(--color-text-primary)',
  position: 'relative',
});

export const title = style({
  marginBottom: '8px',
});
