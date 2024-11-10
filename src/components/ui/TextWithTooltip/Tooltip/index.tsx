'use client';

import { useTooltip } from '@/components/ui/TextWithTooltip/@hooks/useTooltip';

import { Text } from '../../Text';

import { tooltip } from './index.css';

export const Tooltip = ({ text }: { text: string }) => {
  const { isVisible, x } = useTooltip();

  return (
    <Text
      fontSize="xxs"
      fontWeight="bold"
      className={tooltip}
      style={{
        position: 'absolute',
        left: `${x}px`,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
      }}
    >
      {text}
    </Text>
  );
};
