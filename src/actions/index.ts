'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { prisma } from '../db';

export async function editSnipet(id: number, code: string) {
  await prisma.snippet.update({
    where: { id },
    data: {
      code,
    },
  });
  revalidatePath('/');
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await prisma.snippet.delete({
    where: { id },
  });
  revalidatePath('/');
  redirect('/');
}

export type FormState = {
  errors?: Record<string, string>;
  message?: string;
};

export async function createSnippet(formState: FormState, formData: FormData) {
  try {
    // Check the user's inputs and make sure they're valid
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;
    const errors: Record<string, string> = {};

    if (title.trim().length === 0) {
      errors.title = "Title can't be empty";
    }
    if (typeof title !== 'string' || code.trim().length === 0) {
      errors.code = "Code can't be empty";
    }

    if (Object.keys(errors).length > 0) {
      return { errors };
    }
    // Create a new record in db
    await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (err: unknown) {
    return {
      message: err instanceof Error ? err.message : 'Something wen wrong',
    };
  }
  revalidatePath('/');
  redirect('/');
}
