import Image from 'next/image';

import { Text } from '@/components/ui';
import Avatar from '@public/assets/avatar.jpeg';

import { avatar, header, hideOnMobile, nav, wrap } from './index.css';

const Header = () => {
  return (
    <div className={wrap}>
      <div className={header}>
        <ul className={nav}>
          <li>
            <Image src={Avatar} className={avatar} alt="" />
          </li>
          <li>
            <Text fontSize="xl" fontWeight="bold">
              이은지
            </Text>
            <Text fontSize="xl" fontWeight="bold" className={hideOnMobile}>
              {' | Frontend Engineer'}
            </Text>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Header };
