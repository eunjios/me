import { LabelContent, Section, Text, Title } from '@/components/ui';
import { projects } from '@/constants/project';
import type { Project } from '@/types/data';

import { block, mgBottom } from './index.css';

const Project = () => {
  return (
    <>
      <Title>Project</Title>
      {projects.map((project) => (
        <Section key={project.id} date={project.date}>
          <Section.SubtitleLink href={`/project/${project.id}`}>
            {project.title}
          </Section.SubtitleLink>
          <Section.Text className={mgBottom}>{project.about}</Section.Text>
          {project.details.map((detail) => (
            <LabelContent key={detail.title} type="small" label={detail.title}>
              {detail.texts.map((text, i) => (
                <Text key={i} className={block}>
                  {text}
                </Text>
              ))}
            </LabelContent>
          ))}
        </Section>
      ))}
    </>
  );
};

export { Project };
