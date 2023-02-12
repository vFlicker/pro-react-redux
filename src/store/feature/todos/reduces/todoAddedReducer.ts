import { PayloadAction } from '@reduxjs/toolkit';

import { addTodo, createTodo } from '~/domain/todos';

import { State } from '../types';

type Payload = {
  title: string;
};

export const todoAddedReducer = (
  state: State,
  action: PayloadAction<Payload>,
): void => {
  const { todos } = state;
  const { title } = action.payload;

  const todo = createTodo(title);
  const updatedTodos = addTodo(todos, todo);
  state.todos = updatedTodos;
};
