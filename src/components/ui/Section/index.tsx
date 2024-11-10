import { BaseProps } from './@types';
import { SectionContainer } from './Container';
import { SectionContent } from './Content';
import { SectionDate } from './Date';
import { SectionSubtitle } from './Subtitle';
import { SubtitleLink } from './SubtitleLink';
import { SectionText } from './Text';

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

Section.Container = SectionContainer;
Section.Date = SectionDate;
Section.Content = SectionContent;
Section.Subtitle = SectionSubtitle;
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
