import { content } from './@styles/index.css';
import { BaseProps } from './@types';

export const Content = ({ children }: BaseProps) => {
  return <div className={content}>{children}</div>;
};
