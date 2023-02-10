import { useState } from 'react';

import { useAppDispatch } from '~/store';
import { addTodo } from '~/store/feature/todos/todosSlice';

import classes from './AddTodo.module.css';

export function AddTodo(): JSX.Element {
  const [todoText, setTodoText] = useState('');

  const dispatch = useAppDispatch();

  return (
    <input
      type="text"
      className={classes.input}
      placeholder="What needs to be done?"
      value={todoText}
      onChange={(evt) => setTodoText(evt.target.value)}
      onKeyDown={(evt) => {
        if (evt.key === 'Enter' || evt.code === 'Enter') {
          dispatch(addTodo({ title: todoText }));
          setTodoText('');
        }
      }}
    />
  );
}
