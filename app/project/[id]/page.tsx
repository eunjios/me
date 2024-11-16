import { PageProps } from '.next/types/app/page';
import { ProjectDetail } from '@/components/content/project';

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  return (
    <>
      <ProjectDetail id={id} />
    </>
  );
}
