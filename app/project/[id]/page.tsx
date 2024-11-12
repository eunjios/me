import { ProjectDetail } from '@/components/content/project';

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  return (
    <>
      <ProjectDetail id={id} />
    </>
  );
}
