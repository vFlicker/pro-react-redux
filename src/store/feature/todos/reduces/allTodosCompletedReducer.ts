import { markTodosCompleted } from '~/domain/todos';

import { State } from '../types';

export const allTodosCompletedReducer = (state: State): void => {
  state.todos = markTodosCompleted(state.todos);
};
