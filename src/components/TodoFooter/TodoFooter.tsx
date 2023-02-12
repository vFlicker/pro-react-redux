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

function Actions(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleMarkCompletedClick = () => dispatch(markTodosCompleted());
  const handleClearCompletedClick = () => dispatch(clearCompletedTodos());

  return (
    <div className={classes.actions}>
      <h5 className={classes.title}>Actions</h5>
      {/* TODO: винести handlers */}
      <Button
        className={classes.actionButton}
        onClick={handleMarkCompletedClick}
      >
        Mark All Completed
      </Button>
      {/* TODO: винести handlers */}
      <Button
        className={classes.actionButton}
        onClick={handleClearCompletedClick}
      >
        Clear Completed
      </Button>
    </div>
  );
}

function RemainingTodos(): JSX.Element {
  /* TODO: rename selector */
  const remainingTodos = useAppSelector(selectTodosLeftCount);

  const suffix = remainingTodos === 1 ? '' : 's';

  return (
    <div className={classes.remainingTodos}>
      <h5 className={classes.title}>Remaining Todos</h5>
      <div>
        <b>{remainingTodos}</b> item{suffix} left
      </div>
    </div>
  );
}

function StatusFilters(): JSX.Element {
  const dispatch = useAppDispatch();

  const filterByStatus = useAppSelector(selectFilterByStatus);

  const handleChangeFilterClick = (evt: ChangeEvent<HTMLInputElement>) => {
    /* TODO: Ми знаємо куди ми натиснули і без використання evt */
    const status = evt.target.value as Status;
    dispatch(changeFilterByStatus({ status }));
  };

  return (
    <div className={classes.filterByStatus}>
      <h5 className={classes.title}>Filter by Status</h5>
      <ul className={classes.filterList}>
        {/* TODO: [key, value] замість [value, text] */}
        {Object.entries(FilterByStatus).map(([value, text]) => (
          <li key={value}>
            <Radio
              name="filter"
              value={value}
              /* TODO: Винести в зміну */
              checked={value === filterByStatus}
              /* TODO: Винести в handler */
              onChange={handleChangeFilterClick}
            >
              {text}
            </Radio>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ColorFilters(): JSX.Element {
  const dispatch = useAppDispatch();

  const filtersByColor = useAppSelector(selectFilterByColors);

  const handleChangeColorClick = (evt: ChangeEvent<HTMLInputElement>) => {
    /* TODO: Щоб не перевіряти по індексу у `changeFilterByColors`
    повинні ми додати чи видалити колір, можна скористатися
    filtersByColor та пошукати там колір */
    const color = evt.target.value as Color;
    dispatch(changeFilterByColors({ color }));
  };

  return (
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
                    /* TODO: винести у константу */
                    checked={filtersByColor.includes(value as Color)}
                    onChange={handleChangeColorClick}
                  />
                  {/* TODO: зробити inline css */}
                  <span data-color={value}>{text}</span>
                </label>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
}

export function TodoFooter(): JSX.Element {
  return (
    <footer className={classes.footer}>
      <Actions />
      <RemainingTodos />
      <StatusFilters />
      <ColorFilters />
    </footer>
  );
}
