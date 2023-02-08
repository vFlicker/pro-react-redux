import { TodoFooter } from '../TodoFooter';
import { TodoList } from '../TodoList';
import classes from './TodoApp.module.css';

export function TodoApp(): JSX.Element {
  return (
    <div className={classes.wrapper}>
      <TodoList />
      <TodoFooter />
    </div>
  );
}
