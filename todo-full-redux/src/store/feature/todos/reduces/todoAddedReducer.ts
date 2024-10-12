import { PayloadAction } from '@reduxjs/toolkit';

import { createTodo } from '~/domain/todos';

import { todosAdapter } from '../helpers';
import { State } from '../types';

type Payload = {
  title: string;
};

export const todoAddedReducer = (
  state: State,
  action: PayloadAction<Payload>,
): void => {
  const todo = createTodo(action.payload.title);
  todosAdapter.addOne(state, todo);
};
