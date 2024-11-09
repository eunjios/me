export default function ProjectPage({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>;
}
