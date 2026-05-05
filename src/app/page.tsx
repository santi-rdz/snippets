import Link from 'next/link';
import { prisma } from '../db';

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  return (
    <>
      <header className="flex  mb-6 justify-between items-center">
        <h2 className="text-2xl font-medium">Snippets</h2>
        <Link
          className="px-6 rounded-md shadow-sm duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-blue-700 text-white py-2 font-medium text-lg"
          href="/snippets/new"
        >
          New
        </Link>
      </header>
      <ul className=" space-y-4">
        {snippets.map(({ title, id }) => (
          <li
            key={id}
            className="group  items-center rounded-sm border border-gray-200 text-lg  hover:shadow-md duration-300 shadow-sm cursor-pointer"
          >
            <Link
              className="group-hover:underline items-center flex px-3 py-2 "
              href={`/snippets/${id}`}
            >
              {title}
              <span className="hidden text-sm text-blue-600  group-hover:flex ml-auto">
                View &rarr;
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
