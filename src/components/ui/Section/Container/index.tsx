import { BaseProps } from '../@types';

import { container } from './index.css';

export const SectionContainer = ({ children }: BaseProps) => {
  return <div className={container}>{children}</div>;
};
