import { BaseProps } from '../@types';

import { content } from './index.css';

export const SectionContent = ({ children }: BaseProps) => {
  return <div className={content}>{children}</div>;
};
