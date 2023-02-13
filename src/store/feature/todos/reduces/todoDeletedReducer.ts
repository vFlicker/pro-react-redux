import { PayloadAction } from '@reduxjs/toolkit';

import { Todo, removeTodo } from '~/domain/todos';

import { State } from '../types';

type Payload = {
  todo: Todo;
};

export const todoDeletedReducer = (
  state: State,
  action: PayloadAction<Payload>,
): void => {
  const { todos } = state;
  const { todo } = action.payload;

  /**
   * REMARK: if we were using an adapter, we would simply call
   * the `removeOne` method of the `todosAdapter` object.
   */
  const updatedTodos = removeTodo(todos, todo);
  state.todos = updatedTodos;
};
