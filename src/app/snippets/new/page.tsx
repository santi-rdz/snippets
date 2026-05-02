import { prisma } from '@/src/db';
import { redirect } from 'next/navigation';

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    // This need to be a server action!
    'use server';
    // Check the user's inputs and make sure they're valid
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;
    // Create a new record in db
    const snippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);
    // Redirect the user back to the root home
    redirect('/');
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold text-xl  my-3">Create a Snippet </h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="title"
          />
        </div>
        <div className="flex gap-4 items-center">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea className="border rounded p-2 w-full" name="code" />
        </div>
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create Snippet!
        </button>
      </div>
    </form>
  );
}
