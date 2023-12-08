'use server';
import { revalidatePath } from 'next/cache';
import db from './db';
// TODO: throwing error only for now, i'll adjust that later

export const completeTodo = async (id: string) => {
  await db.todo.update({
    where: { id },
    data: {
      completed: true,
    },
  });

  revalidatePath('/todos');
};
export const newTodo = async (formData: FormData) => {
  const content = formData.get('content') as string;
  if (!content) {
    throw new Error('Content is missing.');
  }
  const todo = await db.todo.create({
    data: {
      content,
    },
  });

  revalidatePath('/todos');
};
