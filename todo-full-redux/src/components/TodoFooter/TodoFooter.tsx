import { Color, Status } from '~/domain/filters';
import { useAppDispatch, useAppSelector } from '~/store';
import {
  filterByStatusChanged,
  filterByColorChanged,
  selectFilterByColors,
  selectFilterByStatus,
} from '~/store/feature/filters/filtersSlice';
import {
  completedTodosCleared,
  allTodosCompleted,
  selectRemainingTodos,
} from '~/store/feature/todos/todosSlice';
import { capitalize } from '~/utils/capitalize';

import { Button } from '../Button';
import { Radio } from '../Radio';
import { SearchTodo } from '../SearchTodo';
import classes from './TodoFooter.module.css';

function Actions(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleMarkCompletedClick = () => dispatch(allTodosCompleted());
  const handleClearCompletedClick = () => dispatch(completedTodosCleared());

  return (
    <div className={classes.actions}>
      <h5 className={classes.title}>Actions</h5>
      <Button
        className={classes.actionButton}
        onClick={handleMarkCompletedClick}
      >
        Mark All Completed
      </Button>
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
  const remainingTodos = useAppSelector(selectRemainingTodos);

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

  const filterList = Object.entries(Status).map(([key, value]) => {
    const handleChangeFilterClick = () => {
      dispatch(filterByStatusChanged({ status: value }));
    };

    const isChecked = value === filterByStatus;

    return (
      <li key={key}>
        <Radio
          name="filter"
          value={value}
          checked={isChecked}
          onChange={handleChangeFilterClick}
        >
          {capitalize(value)}
        </Radio>
      </li>
    );
  });

  return (
    <div className={classes.filterByStatus}>
      <h5 className={classes.title}>Filter by Status</h5>
      <ul className={classes.filterList}>{filterList}</ul>
    </div>
  );
}

function ColorFilters(): JSX.Element {
  const dispatch = useAppDispatch();

  const filtersByColor = useAppSelector(selectFilterByColors);

  const filterList = Object.entries(Color).map(([key, value]) => {
    const handleChangeColorClick = () => {
      dispatch(filterByColorChanged({ color: value }));
    };

    const isChecked = filtersByColor.includes(value);

    return (
      value && (
        <li key={key} className={classes.filterByColorItem}>
          <label className={classes.filterByColorLabel}>
            <input
              type="checkbox"
              className={classes.inputColor}
              value={value}
              checked={isChecked}
              onChange={handleChangeColorClick}
            />
            <span data-color={value}>{capitalize(value)}</span>
          </label>
        </li>
      )
    );
  });

  return (
    <div className={classes.filterByColor}>
      <h5 className={classes.title}>Filter by Color</h5>
      <ul className={classes.filterList}>{filterList}</ul>
    </div>
  );
}

export function TodoFooter(): JSX.Element {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <Actions />
        <RemainingTodos />
        <StatusFilters />
        <ColorFilters />
      </div>
      <SearchTodo />
    </footer>
  );
}
