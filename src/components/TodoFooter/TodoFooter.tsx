import { ChangeEvent } from 'react';

import { FilterByStatus, Status } from '~/domain/filter';
import { useAppDispatch, useAppSelector } from '~/store';
import {
  changeFilterByStatus,
  selectFilterByStatus,
} from '~/store/feature/filters/filtersSlice';
import {
  clearCompletedTodos,
  markTodosCompleted,
  selectTodosLeftCount,
} from '~/store/feature/todos/todosSlice';

import { Button } from '../Button';
import { Radio } from '../Radio';
import classes from './TodoFooter.module.css';

export function TodoFooter(): JSX.Element {
  const dispatch = useAppDispatch();

  const todosLeft = useAppSelector(selectTodosLeftCount);
  const filterByStatus = useAppSelector(selectFilterByStatus);

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
          <b>{todosLeft}</b> items left
        </div>
      </div>

      <div className="col">
        <h5>Filter by Status</h5>
        <ul className={classes.filterList}>
          {Object.entries(FilterByStatus).map(([value, text]) => (
            <li key={value}>
              <Radio
                name="filter"
                value={value}
                checked={value === filterByStatus}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  const status = evt.target.value as Status;
                  dispatch(changeFilterByStatus({ status }));
                }}
              >
                {text}
              </Radio>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
