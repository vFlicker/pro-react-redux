import { PayloadAction } from '@reduxjs/toolkit';

import { Todo, removeTodo } from '~/domain/todos';

import { State } from '../types';

type Payload = {
  todo: Todo;
};

export const removeTodoReducer = (
  state: State,
  action: PayloadAction<Payload>,
): void => {
  const { todos } = state;
  const { todo } = action.payload;

  const updatedTodos = removeTodo(todos, todo);
  state.todos = updatedTodos;
};
