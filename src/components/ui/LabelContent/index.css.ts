import { style } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
  gap: '16px',
  paddingBottom: '8px',

  '@media': {
    'screen and (max-width: 768px)': {
      flexDirection: 'column',
      gap: '0',
    },
  },
});

export const left = style({
  flexShrink: 0,
  width: '124px',
});

export const content = style({
  flex: 1,
});
