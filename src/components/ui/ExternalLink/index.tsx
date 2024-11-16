import { LuArrowUpRight } from 'react-icons/lu';

import { Text } from '../Text';

import { icon, link, txt } from './index.css';

interface Props {
  href: string;
  text?: string;
}

export const ExternalLink = ({ href, text }: Props) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={link}>
      <Text fontSize="xs" color="primary" className={txt}>
        {text}
      </Text>
      <LuArrowUpRight size="14px" className={icon} />
    </a>
  );
};
