import { getWorks } from '@/api/firebase/resume';
import { Section, Title } from '@/components/ui';

const WorkExperience = async () => {
  const works = await getWorks();

  return (
    <>
      <Title>Work Experience</Title>
      {works.map((work) => (
        <Section
          key={work.company}
          date={`${work.period.start} - ${work.period.end}`}
        >
          <Section.Subtitle>{`${work.company} | ${work.job}`}</Section.Subtitle>
          <Section.Text>{work.about}</Section.Text>
          <Section.Text>{work.techStack}</Section.Text>
        </Section>
      ))}
    </>
  );
};

export { WorkExperience };
