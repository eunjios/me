import { getAbout } from '@/api/firebase/resume';
import { Callout, LabelContent } from '@/components/ui';

import { about } from './index.css';

const About = async () => {
  const aboutData = await getAbout();

  return (
    <Callout className={about}>
      {aboutData.map((data) => (
        <LabelContent key={data.title} label={data.title}>
          {data.text}
        </LabelContent>
      ))}
    </Callout>
  );
};

export { About };
