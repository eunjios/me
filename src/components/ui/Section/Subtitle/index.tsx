import { Text } from '../../Text';
import { BaseProps } from '../@types';

import { title } from './index.css';

export const SectionSubtitle = ({ children }: BaseProps) => {
  return (
    <div className={title}>
      <Text fontSize="l" fontWeight="bold">
        {children}
      </Text>
    </div>
  );
};
