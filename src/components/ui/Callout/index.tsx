import classNames from 'classnames';

import { callout } from './index.css';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Callout = ({ children, className }: Props) => {
  return <div className={classNames(className, callout)}>{children}</div>;
};

export { Callout };
