import { clearCompletedTodos } from '~/domain/todos';

import { State } from '../types';

export const completedTodosClearedReducer = (state: State): void => {
  state.todos = clearCompletedTodos(state.todos);
};
