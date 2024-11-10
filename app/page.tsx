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
      <Project />
      <Education />
      <Footer />
    </div>
  );
}
