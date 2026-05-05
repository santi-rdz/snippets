import SnippetEditForm from '@/src/components/SnippetEditForm';
import { prisma } from '@/src/db';
import { notFound } from 'next/navigation';

interface SnippetEditPageProps {
  params: Promise<{ id: string }>;
}

export default async function SnippetEditPage({
  params,
}: SnippetEditPageProps) {
  const { id } = await params;

  const snippet = await prisma.snippet.findFirst({
    where: { id: +id },
  });

  if (!snippet) return notFound();

  return (
    <>
      <header>
        <h2 className="text-2xl font-medium">Editing: {snippet.title}</h2>
      </header>
      <SnippetEditForm snippet={snippet} />
    </>
  );
}
