import { markTodosCompleted } from '~/domain/todos';

import { State } from '../types';

export const markTodosCompletedReducer = (state: State): void => {
  state.todos = markTodosCompleted(state.todos);
};
