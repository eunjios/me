import { Text } from '../Text';
import { date, dateHeight } from './@styles/index.css';
import { BaseProps } from './@types';

export const SectionDate = ({ children }: BaseProps) => {
  return (
    <div className={date}>
      <Text color="textSecondary" fontSize="s" className={dateHeight}>
        {children}
      </Text>
    </div>
  );
};
