import {
  About,
  Education,
  Project,
  WorkExperience,
} from '../src/components/content/resume';
import { Footer } from '../src/components/layout';

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
