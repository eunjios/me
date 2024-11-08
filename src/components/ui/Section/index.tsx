import { BaseProps } from './@types';
import { Container } from './Section.Container';
import { Content } from './Section.Content';
import { SectionDate } from './Section.Date';
import { Subtitle } from './Section.Subtitle';
import { SubtitleLink } from './Section.SubtitleLink';
import { SectionText } from './Section.Text';

export type SectionProps = {
  date?: string;
  sideTitle?: string;
} & BaseProps;

const Section = ({ children, date }: SectionProps) => {
  return (
    <Section.Container>
      {date && <Section.Date>{date}</Section.Date>}
      <Section.Content>{children}</Section.Content>
    </Section.Container>
  );
};

Section.Container = Container;
Section.Date = SectionDate;
Section.Content = Content;
Section.Subtitle = Subtitle;
Section.Text = SectionText;
Section.SubtitleLink = SubtitleLink;

// <Section>
//   <Section.Date />
//   <Section.Content>
//     <Section.Subtitle>소제목</Section.Subtitle>
//     <Section.Text>텍스트</Section.Text>
//     <Section.Text>텍스트</Section.Text>
//   </Section.Content>
// </Section>

export { Section };
