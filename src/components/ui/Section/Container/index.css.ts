import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: '16px',
  paddingBottom: '24px',

  '@media': {
    'screen and (max-width: 768px)': {
      flexDirection: 'column',
      gap: '0',
    },
  },
});
