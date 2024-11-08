import Link from 'next/link';

import { Text } from '../Text';
import { link, title } from './@styles/index.css';
import { BaseProps } from './@types';

type Props = {
  href: string;
} & BaseProps;

export const SubtitleLink = ({ children, href }: Props) => {
  return (
    <div className={title}>
      <Link href={href} className={link}>
        <Text fontSize="l" fontWeight="bold">
          {children}
        </Text>
      </Link>
    </div>
  );
};
