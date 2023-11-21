import TodoComponent from './TodoComponent';
import { Todo } from '@prisma/client';

const TodoList = ({ todos }: { todos: Todo[] | [] }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoComponent todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
