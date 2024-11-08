import { container } from './@styles/index.css';
import { BaseProps } from './@types';

export const Container = ({ children }: BaseProps) => {
  return <div className={container}>{children}</div>;
};
