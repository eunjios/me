import { getProjects } from '@/api/firebase/resume';
import { LabelContent, Section, Text, Title } from '@/components/ui';

import { block, mg } from './index.css';

const Project = async () => {
  const projects = await getProjects();
  return (
    <>
      <Title>Project</Title>
      {projects.map((project) => (
        <Section
          key={project.id}
          date={`${project.period.start} - ${project.period.end}`}
        >
          <Section.SubtitleLink href={`/project/${project.id}`}>
            {project.title}
          </Section.SubtitleLink>
          <div className={mg}>
            <Section.Text>{project.about}</Section.Text>
          </div>
          {project.details.map((detail) => (
            <LabelContent key={detail.title} type="small" label={detail.title}>
              <Text className={block}>{detail.text}</Text>
            </LabelContent>
          ))}
        </Section>
      ))}
    </>
  );
};

export { Project };
