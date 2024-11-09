import { SiGithub, SiVelog } from 'react-icons/si';

import { Text } from '@/components/ui';

import { footer, icons } from './index.css';

const Footer = () => {
  return (
    <div className={footer}>
      <div>
        <Text color="textSecondary" fontSize="s">
          eunjios © 2024 copyright
        </Text>
      </div>
      <div className={icons}>
        <a
          href="https://www.github.com/eunjios"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub size={28} color={'var(--color-text-secondary)'} />
        </a>
        <a
          href="https://velog.io/@eunjios/posts"
          target="_blank"
          rel="noreferrer"
        >
          <SiVelog size={28} color={'var(--color-text-secondary)'} />
        </a>
      </div>
    </div>
  );
};

export { Footer };
