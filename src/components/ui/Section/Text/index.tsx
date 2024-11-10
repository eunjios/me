import { Text } from '../../Text';
import { BaseProps } from '../@types';

type Props = BaseProps & React.HTMLAttributes<HTMLDivElement>;

export const SectionText = ({ children, ...props }: Props) => {
  return (
    <div {...props}>
      <Text>{children}</Text>
    </div>
  );
};
