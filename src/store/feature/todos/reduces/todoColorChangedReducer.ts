import { PayloadAction } from '@reduxjs/toolkit';

import { Color } from '~/domain/filters';
import { Todo, updateTodos, updateColor } from '~/domain/todos';

import { State } from '../types';

type Payload = {
  todo: Todo;
  color: Color;
};

export const todoColorChangedReducer = (
  state: State,
  action: PayloadAction<Payload>,
): void => {
  const { todos } = state;
  const { color, todo } = action.payload;

  /* TODO:
  замість того
   1. оновлювати колір у todo
   2. оновлювати всі todos
   3. перезаписувати todos
  можна
   1. знайти todo за id
   2. оновити колір todo */

  const updatedTodo = updateColor(todo, color);
  const updatedTodos = updateTodos(todos, updatedTodo);
  state.todos = updatedTodos;
};
