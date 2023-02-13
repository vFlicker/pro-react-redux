import { PayloadAction } from '@reduxjs/toolkit';

import { Todo, updateCompleted, updateTodos } from '~/domain/todos';

import { State } from '../types';

type Payload = {
  todo: Todo;
};

export const todoCompliedToggledReducer = (
  state: State,
  action: PayloadAction<Payload>,
): void => {
  const { todos } = state;
  const { todo } = action.payload;

  /**
   * REMARK.
   *
   * Now we:
   *   1. Updated the todo that came with the payload
   *   2. Updated all todos with a new todo
   *   3. Overwrote all todos
   *
   * Better:
   *  1. Found in the state.todos required todo
   *  2. Updated the todo that came with the state
   * Cons: the complexity of the algorithm is O(n)
   *
   * Best:
   *  1. Use createEntityAdapter.
   *  Pluses: the complexity of the algorithm is O(1)
   */
  const updatedTodo = updateCompleted(todo, !todo.isCompleted);
  const updatedTodos = updateTodos(todos, updatedTodo);
  state.todos = updatedTodos;
};
