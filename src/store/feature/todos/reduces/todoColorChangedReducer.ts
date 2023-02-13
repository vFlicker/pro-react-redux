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

  // TODO:
  // 1. Found in the state.todos required todo
  // 2. Updated the todo that came with the state

  const updatedTodo = updateColor(todo, color);
  const updatedTodos = updateTodos(todos, updatedTodo);
  state.todos = updatedTodos;
};
