'use client';

import { useEffect, useRef } from 'react';

import { useTooltipContext } from '@/components/ui/TextWithTooltip/@context';

export const useTooltip = () => {
  const { isVisible, x, setTooltip } = useTooltipContext();
  const timeIdRef = useRef<NodeJS.Timeout>();

  const showTooltip = (x: number) => {
    if (timeIdRef.current) {
      clearTimeout(timeIdRef.current);
    }
    setTooltip({ isVisible: true, x });
  };

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    showTooltip(relativeX);
  };

  const onMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, isVisible: false }));
  };

  useEffect(() => {
    const id = timeIdRef.current;
    return () => {
      id && clearTimeout(id);
    };
  }, []);

  return {
    isVisible,
    x,
    onMouseMove,
    onMouseLeave,
  };
};
