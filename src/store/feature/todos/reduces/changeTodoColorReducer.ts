import { PayloadAction } from '@reduxjs/toolkit';
import { Color } from '~/domain/filter';

import { Todo, updateTodos, updateColor } from '~/domain/todos';

import { State } from '../types';

type Payload = {
  todo: Todo;
  color: Color;
};

export const changeTodoColorReducer = (
  state: State,
  action: PayloadAction<Payload>,
): void => {
  const { todos } = state;
  const { color, todo } = action.payload;

  const updatedTodo = updateColor(todo, color);
  const updatedTodos = updateTodos(todos, updatedTodo);
  state.todos = updatedTodos;
};
