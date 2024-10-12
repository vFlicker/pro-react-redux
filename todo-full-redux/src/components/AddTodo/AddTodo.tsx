import { ChangeEvent, KeyboardEvent, useState } from 'react';

import { useAppDispatch } from '~/store';
import { todoAdded } from '~/store/feature/todos/todosSlice';

import classes from './AddTodo.module.css';

export function AddTodo(): JSX.Element {
  const [text, setText] = useState('');

  const dispatch = useAppDispatch();

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setText(evt.target.value);
  };

  const handleKeyDown = async (evt: KeyboardEvent<HTMLInputElement>) => {
    const trimmedText = text.trim();

    if (!trimmedText) return;

    if (evt.key === 'Enter' || evt.code === 'Enter') {
      await dispatch(todoAdded({ title: trimmedText }));
      setText('');
    }
  };

  return (
    <input
      type="text"
      className={classes.input}
      placeholder="What needs to be done?"
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}
