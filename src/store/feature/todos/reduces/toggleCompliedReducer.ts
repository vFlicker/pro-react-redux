import { PayloadAction } from '@reduxjs/toolkit';

import { Todo, updateTodos, updateCompleted } from '~/domain/todos';

import { State } from '../types';

type Payload = {
  todo: Todo;
  isCompleted: boolean;
};

export const toggleCompletedReducer = (
  state: State,
  action: PayloadAction<Payload>,
) => {
  const { todos } = state;
  const { todo, isCompleted } = action.payload;

  const updatedTodo = updateCompleted(todo, isCompleted);
  const updatedTodos = updateTodos(todos, updatedTodo);
  state.todos = updatedTodos;
};
