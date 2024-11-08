import { Text } from '../Text';
import { title } from './@styles/index.css';
import { BaseProps } from './@types';

export const Subtitle = ({ children }: BaseProps) => {
  return (
    <div className={title}>
      <Text fontSize="l" fontWeight="bold">
        {children}
      </Text>
    </div>
  );
};
