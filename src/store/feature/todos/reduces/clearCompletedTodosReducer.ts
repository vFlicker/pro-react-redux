import { clearCompletedTodos } from '~/domain/todos';

import { State } from '../types';

export const clearCompletedTodosReducer = (state: State): void => {
  state.todos = clearCompletedTodos(state.todos);
};
