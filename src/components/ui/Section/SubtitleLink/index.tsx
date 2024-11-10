'use client';

import Link from 'next/link';

import { Text } from '../../Text';
import { BaseProps } from '../@types';

import { link, title } from './index.css';

type Props = {
  href: string;
} & BaseProps;

export const SubTitleLinkContent = ({ children, href }: Props) => {
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
