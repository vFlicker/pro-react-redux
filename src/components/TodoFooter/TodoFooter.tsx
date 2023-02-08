import { useAppDispatch, useAppSelector } from '~/store';
import {
  clearCompletedTodos,
  markTodosCompleted,
  selectTodosLeftCount,
} from '~/store/feature/todos/todosSlice';

import { Button } from '../Button';
import classes from './TodoFooter.module.css';

export function TodoFooter(): JSX.Element {
  const dispatch = useAppDispatch();

  const todosLeft = useAppSelector(selectTodosLeftCount);

  return (
    <footer className={classes.footer}>
      <div className="col">
        <h5>Actions</h5>
        <Button
          onClick={() => {
            dispatch(markTodosCompleted());
          }}
        >
          Mark all completed
        </Button>
        <Button
          onClick={() => {
            dispatch(clearCompletedTodos());
          }}
        >
          Clear completed
        </Button>
      </div>

      <div className="col">
        <h5>Remaining Todos</h5>
        <div>
          <span>{todosLeft}</span> items left
        </div>
      </div>
    </footer>
  );
}
