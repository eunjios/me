import { getAllProjectIds } from '@/api';
import { ProjectDetail } from '@/components/content/project';

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const ids = await getAllProjectIds();

  return ids.map((id) => ({ id }));
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  return (
    <>
      <ProjectDetail id={id} />
    </>
  );
}
