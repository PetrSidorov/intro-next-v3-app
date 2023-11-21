import { Todo } from '@prisma/client';

const TodoComponent = ({ todo }: { todo: Todo }) => {
  return <div>{todo.content}</div>;
};

export default TodoComponent;
