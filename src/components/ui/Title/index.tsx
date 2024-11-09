import classNames from 'classnames';

import { Text } from '../Text';

import { container, text, underline } from './index.css';

interface BaseProps {
  children?: React.ReactNode;
}

const Title = ({ children }: BaseProps) => {
  return (
    <div className={container}>
      <Text
        fontSize="xl"
        fontWeight="bold"
        className={classNames(underline, text)}
      >
        {children}
      </Text>
    </div>
  );
};

export { Title };
