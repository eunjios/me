import { Text } from '../Text';

import { content, left, wrap } from './index.css';

interface Props {
  children?: React.ReactNode;
  label?: string;
  type?: 'default' | 'small';
}

const LabelContent = ({ label, children, type = 'default' }: Props) => {
  return (
    <div className={wrap}>
      {label && (
        <div className={left[type]}>
          <Text color="textSecondary">{label}</Text>
        </div>
      )}
      <div className={content}>
        <Text>{children}</Text>
      </div>
    </div>
  );
};

export { LabelContent };
