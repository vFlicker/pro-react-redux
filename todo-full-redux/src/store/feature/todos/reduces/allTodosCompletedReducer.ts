import { State } from '../types';

export const allTodosCompletedReducer = (state: State): void => {
  const todos = Object.values(state.entities);

  for (const todo of todos) {
    if (todo) todo.isCompleted = true;
  }
};
