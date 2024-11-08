import { Text } from '../Text';
import { BaseProps } from './@types';

export const SectionText = ({ children }: BaseProps) => {
  return (
    <div>
      <Text>{children}</Text>
    </div>
  );
};
