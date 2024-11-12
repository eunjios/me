import { Text } from '../../Text';
import { BaseProps } from '../@types';

type Props = BaseProps & React.HTMLAttributes<HTMLDivElement>;

export const SectionText = ({ children, style, ...props }: Props) => {
  return (
    <div style={{ marginBottom: '8px', ...style }} {...props}>
      <Text>{children}</Text>
    </div>
  );
};
