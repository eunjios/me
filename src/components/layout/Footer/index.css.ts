import { style } from '@vanilla-extract/css';

export const footer = style({
  padding: '20px 0',
  borderTop: '1.2px solid #78787813',
  zIndex: 1,
  display: 'flex',
  gap: '8px',
  justifyContent: 'space-between',
});

export const icons = style({
  display: 'flex',
  gap: '8px',
});
