import { useAppSelector } from '~/store';
import { selectFilteredTodosIds } from '~/store/feature/todos/todosSlice';

import { TodoItem } from '../TodoItem';
import classes from './TodoList.module.css';

export function TodoList(): JSX.Element {
  const todoIds = useAppSelector(selectFilteredTodosIds);

  const todoList = todoIds.map((id) => (
    <li key={id} className={classes.item}>
      <TodoItem id={id} />
    </li>
  ));

  return <ul className={classes.list}>{todoList}</ul>;
}
