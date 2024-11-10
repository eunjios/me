import { useTooltip } from '@/components/ui/TextWithTooltip/@hooks/useTooltip';

import { TooltipProvider } from './@context';
import { Tooltip } from './Tooltip';

interface Props {
  children: React.ReactNode;
  tooltipText: string;
}

const TooltipContent = ({ children, tooltipText }: Props) => {
  const { onMouseMove, onMouseLeave } = useTooltip();

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={onMouseMove}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <Tooltip text={tooltipText} />
      {children}
    </div>
  );
};

export const TextWithTooltip = ({ children, tooltipText }: Props) => {
  return (
    <TooltipProvider>
      <TooltipContent tooltipText={tooltipText}>{children}</TooltipContent>
    </TooltipProvider>
  );
};
