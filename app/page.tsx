import {
  About,
  Education,
  Project,
  WorkExperience,
} from '../src/components/content/resume';

export default function page() {
  return (
    <div>
      <About />
      <WorkExperience />
      <Project />
      <Education />
    </div>
  );
}
