import { TodoItem } from '../TodoItem/TodoItem';
import classes from './TodoApp.module.css';

export function TodoApp(): JSX.Element {
  return (
    <div className={classes.wrapper}>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}
