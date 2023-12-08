'use client';
import { useTransition } from 'react';
import { Todo } from '@prisma/client';
import { completeTodo } from '@/utils/actions';

const TodoComponent = ({ todo }: { todo: Todo }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div
      className={`border border-black/20 cursor-pointer ${
        todo.completed ? 'line-through text-gray-900' : ''
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  );
};

export default TodoComponent;
