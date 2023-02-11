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

  /* TODO:
    Зараз:
     1. Оновили todo який прийшов з payload
     2. Оновили всі todos новим todo
     3. Перезаписали всі todos

    Можна в todos які зі state, знайти потрібний todo і оновити тільки його.
    Мінус в тому, що нам треба буде перебирати весь масив todos.
    Складність алгоритму О(n).

    Якби ми використовували `createEntityAdapter`,
    ми шукали б todo в об'єкті. Складність алгоритму О(1).
  */
  const updatedTodo = updateCompleted(todo, isCompleted);
  const updatedTodos = updateTodos(todos, updatedTodo);
  state.todos = updatedTodos;
};
