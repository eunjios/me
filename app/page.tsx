import {
  Education,
  Project,
  WorkExperience,
} from '../src/components/content/resume';

export default function page() {
  return (
    <div>
      <WorkExperience />
      <Project />
      <Education />
    </div>
  );
}
