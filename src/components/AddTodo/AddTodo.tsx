import { useState } from 'react';

import { useAppDispatch } from '~/store';
import { addTodo } from '~/store/feature/todos/todosSlice';

import classes from './AddTodo.module.css';

export function AddTodo(): JSX.Element {
  /* TODO: Не треба писати todo, бо ми з назви компоненту знаємо,
  що це текст todo. */
  const [todoText, setTodoText] = useState('');

  const dispatch = useAppDispatch();

  return (
    <input
      type="text"
      className={classes.input}
      placeholder="What needs to be done?"
      value={todoText}
      /* TODO: Винести хендлери. */
      onChange={(evt) => setTodoText(evt.target.value)}
      onKeyDown={(evt) => {
        /* TODO: Обрізати текст, щоб не було пробілів. */
        if (evt.key === 'Enter' || evt.code === 'Enter') {
          /* TODO: Якби це була санка, то треба було б дочикатся її резолву,
          тобто написати await */
          dispatch(addTodo({ title: todoText }));
          setTodoText('');
        }
      }}
    />
  );
}
