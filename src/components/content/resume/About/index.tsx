import { Callout, LabelContent } from '../../../ui';
import { about } from './index.css';

const About = () => {
  return (
    <Callout className={about}>
      <LabelContent label="🌱 경험 = 성장">
        경험을 통해 성장한다고 믿어요. 그래서 무엇이든 두려워하지 않고 도전해요.
      </LabelContent>
      <LabelContent label="🕊️ 필요한 팀원">
        동료의 일을 덜어주는 함께 일하고 싶은 개발자가 되고 싶어요.
      </LabelContent>
      <LabelContent label="✨ 성능 최적화">
        성능 최적화에 관심이 많아요. 다양한 실험을 통해 무려 99%의 성능을 개선한
        경험도 있답니다.
      </LabelContent>
    </Callout>
  );
};

export { About };
