import { style, styleVariants } from '@vanilla-extract/css';

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

export const left = styleVariants({
  default: {
    flexShrink: 0,
    width: '124px',
  },
  small: {
    flexShrink: 0,
    width: '72px',
  },
});

export const content = style({
  flex: 1,
});
