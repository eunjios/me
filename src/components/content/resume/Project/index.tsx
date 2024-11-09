import { Section, Title } from '@/components/ui';

const Project = () => {
  return (
    <>
      <Title>Project</Title>
      <Section date="2024.06 - 2024.11">
        <Section.SubtitleLink href="/">Neuro Launcher</Section.SubtitleLink>
        <Section.Text>
          업무의 생산성을 높여주는 MacOS 데스크탑 애플리케이션 (런처) 개발
        </Section.Text>
      </Section>
    </>
  );
};

export { Project };
