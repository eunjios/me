import { Text } from '../Text';

import { li, ul } from './index.css';

interface Props {
  children: React.ReactNode;
}

export const Bullet = ({ children }: Props) => {
  return <div className={ul}>{children}</div>;
};

const Item = ({ children }: Props) => {
  return (
    <div className={li}>
      <Text>{children}</Text>
    </div>
  );
};

Bullet.Item = Item;
