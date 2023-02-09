import { useAppSelector } from '~/store';
import { selectFilterByStatus } from '~/store/feature/filters/filtersSlice';
import { selectTodos } from '~/store/feature/todos/todosSlice';

import { TodoItem } from '../TodoItem';
import classes from './TodoList.module.css';

export function TodoList(): JSX.Element {
  const filterByStatus = useAppSelector(selectFilterByStatus);
  const todos = useAppSelector((state) => selectTodos(state, filterByStatus));

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
