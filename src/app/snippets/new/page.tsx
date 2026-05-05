'use client';

import { createSnippet, FormState } from '@/src/actions';
import { useActionState } from 'react';

const initialState: FormState = {};

export default function SnippetCreatePage() {
  const [formState, formAction] = useActionState(createSnippet, initialState);

  return (
    <form action={formAction}>
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
        {formState.errors?.title && (
          <span className="ring-red-600 ring bg-red-200 rounded-sm px-4 py-2">
            {formState.errors.title}
          </span>
        )}
        <div className="flex gap-4 items-center">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea className="border rounded p-2 w-full" name="code" />
        </div>
        {formState.errors?.code && (
          <span className="ring-red-600 ring bg-red-200 rounded-sm px-4 py-2">
            {formState.errors.code}
          </span>
        )}

        <button
          type="submit"
          className="px-6 cursor-pointer rounded-md shadow-sm duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-blue-700 text-white py-2 font-medium text-lg"
        >
          Create Snippet!
        </button>
      </div>
    </form>
  );
}
