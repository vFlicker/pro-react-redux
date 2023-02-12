import { useAppSelector } from '~/store';
import { selectFilteredTodos } from '~/store/feature/todos/todosSlice';

import { TodoItem } from '../TodoItem';
import classes from './TodoList.module.css';

export function TodoList(): JSX.Element {
  const todos = useAppSelector(selectFilteredTodos);

  const todoList = todos.map((todo) => (
    <li key={todo.id} className={classes.item}>
      {/* TODO: передавати id замість todo,
      подивитись як зміниться ререндер */}
      <TodoItem todo={todo} />
    </li>
  ));

  return <ul className={classes.list}>{todoList}</ul>;
}
