import { newTodo } from '@/utils/actions';

const NewTodoForm = ({}) => {
  return (
    <div>
      <form action={newTodo}>
        <input name="content" className="border border-black/25" type="text" />
        <button type="submit">New todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
