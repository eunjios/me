export const colors = {
  black: 'var(--black)',
  white: 'var(--white)',
  background: 'var(--color-background)',
  textPrimary: 'var(--color-text-primary)',
  textSecondary: 'var(--color-text-secondary)',
  border: 'var(--color-border)',
  primary: 'var(--color-primary1)',
} as const;

export const fontSizes = {
  xs: 'var(--font-size-xs)',
  s: 'var(--font-size-s)',
  m: 'var(--font-size-m)',
  l: 'var(--font-size-l)',
  xl: 'var(--font-size-xl)',
} as const;

export const lineHeights = {
  xs: 'var(--line-height-xs)',
  s: 'var(--line-height-s)',
  m: 'var(--line-height-m)',
  l: 'var(--line-height-l)',
  xl: 'var(--line-height-xl)',
} as const;

export const fontWeights = {
  thin: 'var(--font-weight-thin)',
  light: 'var(--font-weight-light)',
  regular: 'var(--font-weight-regular)',
  medium: 'var(--font-weight-medium)',
  bold: 'var(--font-weight-bold)',
} as const;

export type ColorType = keyof typeof colors;
export type FontSize = keyof typeof fontSizes;
export type LineHeight = keyof typeof lineHeights;
export type FontWeight = keyof typeof fontWeights;
