import { getCompletedTodosIds, Todo } from '~/domain/todos';

import { todosAdapter } from '../helpers';
import { State } from '../types';

export const completedTodosClearedReducer = (state: State): void => {
  const todos = Object.values(state.entities) as Todo[];
  const completedTodosIds = getCompletedTodosIds(todos);
  todosAdapter.removeMany(state, completedTodosIds);
};
