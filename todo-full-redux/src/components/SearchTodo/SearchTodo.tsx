import { ChangeEvent, KeyboardEvent, useState } from 'react';

import { useAppDispatch } from '~/store';
import { filterByTermChanged } from '~/store/feature/filters/filtersSlice';

import classes from './SearchTodo.module.css';

export function SearchTodo(): JSX.Element {
  const [term, setTerm] = useState('');

  const dispatch = useAppDispatch();

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setTerm(evt.target.value);
  };

  const handleKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter' || evt.code === 'Enter') {
      dispatch(filterByTermChanged({ term }));
    }
  };

  return (
    <input
      type="text"
      className={classes.input}
      placeholder="What needs to be found?"
      value={term}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}
