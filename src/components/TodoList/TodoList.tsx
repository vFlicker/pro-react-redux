import { useAppSelector } from '~/store';
import { selectTodos } from '~/store/feature/todos/todosSlice';

import { TodoItem } from '../TodoItem';
import classes from './TodoList.module.css';

export function TodoList(): JSX.Element {
  const todos = useAppSelector(selectTodos);

  return (
    <ul className={classes.list}>
      <li>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </li>
    </ul>
  );
}
