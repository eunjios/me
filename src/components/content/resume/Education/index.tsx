import { Section, Text, Title } from '@/components/ui';

const Education = () => {
  return (
    <>
      <Title>Education</Title>
      <Section date="2018.03 - 2023.08">
        <Section.Subtitle>숙명여자대학교</Section.Subtitle>
        <Text>전자공학전공 (GPA: 4.42/4.5)</Text>
      </Section>
      <Section date="2023.03 - 2023.08">
        <Section.Subtitle>
          네이버 커넥트재단 부스트캠프 AI Tech
        </Section.Subtitle>
        <Section.Text>
          추천 시스템을 수료하여 AI 기초 및 모델링, 데이터 시각화 등 학습
        </Section.Text>
        <Section.Text>검색 엔진을 활용한 생성형 AI 서비스 개발</Section.Text>
      </Section>
    </>
  );
};

export { Education };
