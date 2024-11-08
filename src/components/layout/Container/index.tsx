import { container } from './index.css';

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className={container}>{children}</div>;
};

export { Container };
