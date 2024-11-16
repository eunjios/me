import { style } from '@vanilla-extract/css';

import { colors } from '@/types';

export const link = style({
  display: 'inline-block',
  margin: '0 8px 8px 0',
  background: colors.backgroundLink,
  color: colors.textLink,
  padding: '0 8px 0 12px',
  borderRadius: '16px',
});

export const txt = style({
  marginRight: '4px',
});

export const icon = style({
  display: 'inline',
});
