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

  /* TODO: якби ми використовували адаптер,
  ми би просто викликали метод `removeOne` об'єкту `todosAdapter` */

  const updatedTodos = removeTodo(todos, todo);
  state.todos = updatedTodos;
};
