'use client';

import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

type TooltipState = {
  isVisible: boolean;
  x: number;
};

type TooltipContextType = {
  setTooltip: Dispatch<SetStateAction<TooltipState>>;
} & TooltipState;

const TooltipContext = createContext<TooltipContextType | null>(null);

export const TooltipProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [tooltip, setTooltip] = useState({
    isVisible: false,
    x: 0,
  });

  return (
    <TooltipContext.Provider
      value={{
        isVisible: tooltip.isVisible,
        x: tooltip.x,
        setTooltip,
      }}
    >
      {children}
    </TooltipContext.Provider>
  );
};

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error('useTooltipContext must be used within a TooltipProvider');
  }
  return context;
};
