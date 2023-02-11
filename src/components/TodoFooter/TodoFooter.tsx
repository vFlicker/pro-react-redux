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
      {/* TODO: Зробити окремий компонент */}
      <div className={classes.actions}>
        <h5 className={classes.title}>Actions</h5>
        {/* TODO: винести handlers */}
        <Button
          className={classes.actionButton}
          onClick={() => {
            dispatch(markTodosCompleted());
          }}
        >
          Mark All Completed
        </Button>
        {/* TODO: винести handlers */}
        <Button
          className={classes.actionButton}
          onClick={() => {
            dispatch(clearCompletedTodos());
          }}
        >
          Clear Completed
        </Button>
      </div>

      {/* TODO: Зробити окремий компонент */}
      <div className={classes.remainingTodos}>
        <h5 className={classes.title}>Remaining Todos</h5>
        <div>
          {/* TODO: прибрати закінчення `s` якщо маємо 1 item */}
          <b>{todosLeft}</b> items left
        </div>
      </div>

      {/* TODO: Зробити окремий компонент */}
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
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  /* TODO: ми знаємо куди ми натиснули і без використання evt */
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

      {/* TODO: Зробити окремий компонент */}
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
                      /* TODO: винести у handler */
                      onChange={(evt) => {
                        /* TODO: щоб не перевіряти по індексу у `changeFilterByColors`
                        повинні ми додати чи видалити колір, можна скористатися
                        filtersByColor та пошукати там колір */
                        const color = evt.target.value as Color;
                        dispatch(changeFilterByColors({ color }));
                      }}
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
    </footer>
  );
}
