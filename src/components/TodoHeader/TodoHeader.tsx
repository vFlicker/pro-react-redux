import { AddTodo } from '../AddTodo';
import classes from './TodoHeader.module.css';

export function TodoHeader(): JSX.Element {
  return (
    <header className={classes.header}>
      <AddTodo />
    </header>
  );
}
