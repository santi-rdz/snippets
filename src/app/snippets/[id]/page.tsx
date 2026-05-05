import { deleteSnippet } from '@/src/actions';
import { prisma } from '@/src/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type SnippetDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SnippetDetailPage({
  params,
}: SnippetDetailPageProps) {
  await new Promise((r) => setTimeout(r, 400));
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
  const { title, code } = snippet;
  return (
    <>
      <header className="flex mb-6 items-center">
        <h2 className="text-2xl font-medium">{title}</h2>
        <form className="ml-auto" action={deleteSnippet.bind(null, +id)}>
          <Link
            href={`/snippets/${id}/edit`}
            className="px-5 py-2 border mr-4 inline-block rounded cursor-pointer"
          >
            Edit
          </Link>
          <button className="px-5 py-2 border border-red-600 bg-red-600 font-medium text-white rounded cursor-pointer">
            Delete
          </button>
        </form>
      </header>
      <pre className="p-3 bg-gray-200 rounded-sm ">
        <code>{code}</code>
      </pre>
    </>
  );
}
