import { ChangeEvent } from 'react';

import { Color, FilterByColor, FilterByStatus, Status } from '~/domain/filters';
import { useAppDispatch, useAppSelector } from '~/store';
import {
  changeFilterByStatus,
  changeFilterByColors,
  selectFilterByColors,
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
  const filtersByColor = useAppSelector(selectFilterByColors);

  return (
    <footer className={classes.footer}>
      <div className={classes.actions}>
        <h5 className={classes.title}>Actions</h5>
        <Button
          className={classes.actionButton}
          onClick={() => {
            dispatch(markTodosCompleted());
          }}
        >
          Mark All Completed
        </Button>
        <Button
          className={classes.actionButton}
          onClick={() => {
            dispatch(clearCompletedTodos());
          }}
        >
          Clear Completed
        </Button>
      </div>

      <div className={classes.remainingTodos}>
        <h5 className={classes.title}>Remaining Todos</h5>
        <div>
          <b>{todosLeft}</b> items left
        </div>
      </div>

      <div className={classes.filterByStatus}>
        <h5 className={classes.title}>Filter by Status</h5>
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

      <div className={classes.filterByColor}>
        <h5 className={classes.title}>Filter by Color</h5>
        <ul className={classes.filterList}>
          {Object.entries(FilterByColor).map(([value, text]) => {
            return (
              text && (
                <li key={value} className={classes.filterByColorItem}>
                  <label className={classes.filterByColorLabel}>
                    <input
                      type="checkbox"
                      className={classes.inputColor}
                      value={value}
                      checked={filtersByColor.includes(value as Color)}
                      onChange={(evt) => {
                        const color = evt.target.value as Color;
                        dispatch(changeFilterByColors({ color }));
                      }}
                    />
                    <span data-color={value}>{text}</span>
                  </label>
                </li>
              )
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
