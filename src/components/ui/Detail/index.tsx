import { Bullet } from '../Bullet';
import { Text } from '../Text';

import { pdBottom, txt } from './index.css';

interface Props {
  title?: string;
  texts: string[];
}

export const Detail = ({ title, texts }: Props) => {
  return (
    <div className={pdBottom}>
      {title && <Text className={txt}>{title}</Text>}
      <Bullet>
        {texts.map((text, index) => (
          <Bullet.Item key={index}>{text}</Bullet.Item>
        ))}
      </Bullet>
    </div>
  );
};
