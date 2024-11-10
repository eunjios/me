'use client';

import Link from 'next/link';

import { Text } from '../../Text';
import { TextWithTooltip } from '../../TextWithTooltip';
import { BaseProps } from '../@types';

import { link, title } from './index.css';

type Props = {
  href: string;
} & BaseProps;

export const SubtitleLink = ({ children, href }: Props) => {
  return (
    <div className={title}>
      <TextWithTooltip tooltipText="클릭하여 자세히 보기">
        <Link href={href} className={link}>
          <Text fontSize="l" fontWeight="bold">
            {children}
          </Text>
        </Link>
      </TextWithTooltip>
    </div>
  );
};
