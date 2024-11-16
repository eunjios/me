import { getProject } from '@/api';
import { Callout, Detail, LabelContent, Section, Title } from '@/components/ui';

import { calloutContainer } from './index.css';

export const ProjectDetail = async ({ id }: { id: string }) => {
  const project = await getProject(id);

  return (
    <>
      <Title>{project.title}</Title>
      <div className={calloutContainer}>
        <Callout>
          <LabelContent label="소속">{project.company}</LabelContent>
          <LabelContent label="기간">
            {`${project.period.start} - ${project.period.end}`}
          </LabelContent>
          <LabelContent label="역할">{project.role}</LabelContent>
          <LabelContent label="팀원">{project.team}</LabelContent>
          <LabelContent label="기술 스택">{project.techStack}</LabelContent>
        </Callout>
      </div>
      <Section>
        {project.features && (
          <>
            <Section.Subtitle>주요 기능</Section.Subtitle>
            <Section.Text>
              <Detail texts={project.features} />
            </Section.Text>
          </>
        )}
      </Section>
      <Section>
        <Section.Subtitle>기여 내용</Section.Subtitle>
        <Section.Text>
          {project.contributions.map((contribution, index) => (
            <Detail
              key={index}
              title={contribution.title}
              texts={contribution.details}
              links={contribution.links}
            />
          ))}
        </Section.Text>
      </Section>
      {project.troubleshooting && (
        <Section>
          <Section.Subtitle>트러블슈팅</Section.Subtitle>
          <Section.Text>
            {project.troubleshooting.map((trouble, index) => (
              <Detail
                key={index}
                title={trouble.title}
                texts={trouble.details}
              />
            ))}
          </Section.Text>
        </Section>
      )}
    </>
  );
};
