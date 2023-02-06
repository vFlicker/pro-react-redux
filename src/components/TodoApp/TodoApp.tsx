import { useAppDispatch } from '~/store';
import { clearCompletedTodos } from '~/store/feature/todos/todosSlice';

import { Button } from '../Button';
import { TodoList } from '../TodoList';
import classes from './TodoApp.module.css';

export function TodoApp(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className={classes.wrapper}>
      <TodoList />
      <Button
        onClick={() => {
          dispatch(clearCompletedTodos());
        }}
      >
        Clear completed
      </Button>
    </div>
  );
}
