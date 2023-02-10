import { useAppSelector } from '~/store';
import {
  selectFilterByStatus,
  selectFilterByColors,
} from '~/store/feature/filters/filtersSlice';
import { selectTodos } from '~/store/feature/todos/todosSlice';

import { TodoItem } from '../TodoItem';
import classes from './TodoList.module.css';

export function TodoList(): JSX.Element {
  const filterByColors = useAppSelector(selectFilterByColors);
  const filterByStatus = useAppSelector(selectFilterByStatus);
  const todos = useAppSelector((state) =>
    selectTodos(state, { filterByColors, filterByStatus }),
  );

  return (
    <ul className={classes.list}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
}
