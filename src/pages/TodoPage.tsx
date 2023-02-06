import { TodoApp } from '~/components/TodoApp';

import classes from './TodoPage.module.css';

export function TodoPage(): JSX.Element {
  return (
    <div className="container">
      <h2 className={classes.title}>Todos</h2>
      <TodoApp />
    </div>
  );
}
