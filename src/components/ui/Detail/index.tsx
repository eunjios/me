import { Bullet } from '../Bullet';
import { ExternalLink } from '../ExternalLink';
import { Text } from '../Text';
import { LinkData } from '@/types/data';

import { pdBottom, txt } from './index.css';

interface Props {
  title?: string;
  texts: string[];
  links?: LinkData[];
}

export const Detail = ({ title, texts, links }: Props) => {
  return (
    <div className={pdBottom}>
      {title && <Text className={txt}>{title}</Text>}
      <Bullet>
        {texts.map((text, index) => (
          <Bullet.Item key={index}>{text}</Bullet.Item>
        ))}
        {links && (
          <Bullet.Item>
            {links?.map((link, index) => (
              <ExternalLink key={index} href={link.link} text={link.title} />
            ))}
          </Bullet.Item>
        )}
      </Bullet>
    </div>
  );
};
