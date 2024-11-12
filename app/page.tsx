import {
  About,
  Education,
  Project,
  WorkExperience,
} from '@/components/content/resume';

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
