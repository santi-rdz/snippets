import { prisma } from '@/src/db';
import { notFound } from 'next/navigation';

interface SnippetDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SnippetDetailPage({
  params,
}: SnippetDetailPageProps) {
  const { id } = await params;
  const numId = parseInt(id, 10);
  if (isNaN(numId)) {
    return notFound();
  }
  const snippet = await prisma.snippet.findFirst({
    where: { id: numId },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      Show snippet: <span>{snippet?.title}</span>
    </div>
  );
}
