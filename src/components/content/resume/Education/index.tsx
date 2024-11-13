import { getEducations } from '@/api/firebase/resume';
import { Section, Title } from '@/components/ui';

const Education = async () => {
  const educations = await getEducations();

  return (
    <>
      <Title>Education</Title>
      {educations.map((edu) => (
        <Section
          key={edu.title}
          date={`${edu.period.start} - ${edu.period.end}`}
        >
          <Section.Subtitle>{edu.title}</Section.Subtitle>
          {edu.texts.map((text, index) => (
            <Section.Text key={index}>{text}</Section.Text>
          ))}
        </Section>
      ))}
    </>
  );
};

export { Education };
