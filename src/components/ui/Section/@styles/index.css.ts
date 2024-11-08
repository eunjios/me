import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: '16px',
  paddingBottom: '48px',

  '@media': {
    'screen and (max-width: 768px)': {
      flexDirection: 'column',
      gap: '0',
    },
  },
});

export const date = style({
  flexShrink: 0,
  width: '140px',
});

export const content = style({
  flex: 1,
});

export const dateHeight = style({
  lineHeight: '40px !important',
});

export const title = style({
  marginBottom: '8px',
});

export const link = style({
  color: 'var(--color-primary)',
  display: 'inline-flex',
  gap: '4px',
  alignItems: 'center',
  borderBottom: '2px dashed var(--color-text-primary)',
});
