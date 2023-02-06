import { PayloadAction } from '@reduxjs/toolkit';

import { Todo, updateTodos, updateCompleted } from '~/domain/todos';

import { State } from '../types';

type Payload = {
  todo: Todo;
  isCompleted: boolean;
};

export const toggleTodoCompletedReducer = (
  state: State,
  action: PayloadAction<Payload>,
): void => {
  const { todos } = state;
  const { todo, isCompleted } = action.payload;

  const updatedTodo = updateCompleted(todo, isCompleted);
  const updatedTodos = updateTodos(todos, updatedTodo);
  state.todos = updatedTodos;
};
