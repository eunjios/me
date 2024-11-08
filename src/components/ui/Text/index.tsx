import { HTMLAttributes } from 'react';

import {
  ColorType,
  FontSize,
  FontWeight,
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
} from '../../../types';

interface BaseProps {
  children?: React.ReactNode;
  className?: string;
  color?: ColorType;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
}

type TextProps = BaseProps & HTMLAttributes<HTMLSpanElement>;

const Text = ({
  children,
  className,
  color = 'textPrimary',
  fontSize = 'm',
  fontWeight = 'medium',
  ...props
}: TextProps) => {
  return (
    <span
      className={className}
      style={{
        color: colors[color],
        fontSize: fontSizes[fontSize],
        fontWeight: fontWeights[fontWeight],
        lineHeight: lineHeights[fontSize],
        position: 'relative',
      }}
      {...props}
    >
      {children}
    </span>
  );
};

export { Text };
