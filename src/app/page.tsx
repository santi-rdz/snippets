import { prisma } from '../db';

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  return (
    <div>
      {snippets.map(({ title, id }) => (
        <div key={id}>{title}</div>
      ))}
    </div>
  );
}
