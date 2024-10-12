import { TodoHeader } from '../TodoHeader';
import { TodoList } from '../TodoList';
import { TodoFooter } from '../TodoFooter';
import classes from './TodoApp.module.css';

export function TodoApp(): JSX.Element {
  return (
    <div className={classes.wrapper}>
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </div>
  );
}
