import { Section, Title } from '@/components/ui';

const WorkExperience = () => {
  return (
    <>
      <Title>Work Experience</Title>
      <Section date="2024.05 - 2024.11">
        <Section.Subtitle>
          네이버클라우드 | Frontend Engineer, Intern
        </Section.Subtitle>
        <Section.Text>
          업무의 생산성을 높여주는 MacOS 데스크탑 애플리케이션 개발
        </Section.Text>
        <Section.Text>Electron, React, TypeScript, Recoil, pnpm </Section.Text>
      </Section>
    </>
  );
};

export { WorkExperience };
