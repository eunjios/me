import { style } from '@vanilla-extract/css';

export const wrap = style({
  position: 'relative',
  height: '146px',
  zIndex: 99,
});

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  maxWidth: '800px',
  margin: 'auto',
  padding: '40px 20px',
  backdropFilter: 'blur(10px)',
});

export const nav = style({
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
  listStyle: 'none',
});

export const avatar = style({
  verticalAlign: 'center',
  width: '64px',
  height: '64px',
  borderRadius: '50%',
});

export const hideOnMobile = style({
  '@media': {
    'screen and (max-width: 768px)': {
      display: 'none',
    },
  },
});
