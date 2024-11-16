import { Text } from '../Text';

import { li, ul } from './index.css';

interface Props {
  children: React.ReactNode;
}

type ItemProps = Props & React.HTMLAttributes<HTMLDivElement>;

export const Bullet = ({ children }: Props) => {
  return <div className={ul}>{children}</div>;
};

const Item = ({ children, ...props }: ItemProps) => {
  return (
    <div className={li} {...props}>
      <Text>{children}</Text>
    </div>
  );
};

Bullet.Item = Item;
