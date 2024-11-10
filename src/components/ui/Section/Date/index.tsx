import { Text } from '../../Text';
import { BaseProps } from '../@types';

import { date, dateHeight } from './index.css';

export const SectionDate = ({ children }: BaseProps) => {
  return (
    <div className={date}>
      <Text color="textSecondary" fontSize="s" className={dateHeight}>
        {children}
      </Text>
    </div>
  );
};
