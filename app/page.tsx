import {
  About,
  Education,
  Project,
  WorkExperience,
} from '@/components/content/resume';
import { Footer } from '@/components/layout';

export default function page() {
  return (
    <div>
      <About />
      <WorkExperience />
      <Project
        title="Neuro Launcher"
        text="업무의 생산성을 높여주는 MacOS 데스크탑 애플리케이션 개발"
      />
      <Education />
      <Footer />
    </div>
  );
}
