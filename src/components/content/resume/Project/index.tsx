import { LabelContent, Section, Title } from '@/components/ui';
import { getPostId } from '@/utils';

interface Props {
  title: string;
  text: string;
}

const Project = ({ title, text }: Props) => {
  const href = `/project/${getPostId(title)}`;

  return (
    <>
      <Title>Project</Title>
      <Section date="2024.06 - 2024.11">
        <Section.SubtitleLink href={href}>{title}</Section.SubtitleLink>
        <Section.Text>{text}</Section.Text>
      </Section>
    </>
  );
};

export { Project };
