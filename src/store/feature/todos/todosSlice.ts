import { createSelector, createSlice } from '@reduxjs/toolkit';

import { filterTodos, Todo } from '~/domain/todos';
import { todos } from '~/services/mockData';

import { RootState } from '../..';
import { todoAddedReducer } from './reduces/todoAddedReducer';
import { todoColorChangedReducer } from './reduces/todoColorChangedReducer';
import { completedTodosClearedReducer } from './reduces/completedTodosClearedReducer';
import { allTodosCompletedReducer } from './reduces/allTodosCompletedReducer';
import { todoDeletedReducer } from './reduces/todoDeletedReducer';
import { todoCompliedToggledReducer } from './reduces/todoCompliedToggledReducer';
import { State } from './types';

const initialState: State = {
  todos,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: todoAddedReducer,
    todoColorChanged: todoColorChangedReducer,
    completedTodosCleared: completedTodosClearedReducer,
    allTodosCompleted: allTodosCompletedReducer,
    todoCompliedToggled: todoCompliedToggledReducer,
    todoDeleted: todoDeletedReducer,
  },
});

export const {
  todoAdded,
  todoColorChanged,
  completedTodosCleared,
  allTodosCompleted,
  todoCompliedToggled,
  todoDeleted,
} = todosSlice.actions;

const selectTodos = (state: RootState): Todo[] => state.TODOS.todos;

export const selectFilteredTodos = createSelector(
  selectTodos,
  (state: RootState) => state.FILTERS.filters,
  (todos, filters) => {
    const filteredTodos = filterTodos(todos, filters);
    return filteredTodos;
  },
);

export const selectRemainingTodos = (state: RootState): number => {
  const completedTodos = state.TODOS.todos.filter(
    (todo) => todo.isCompleted === false,
  );

  return completedTodos.length;
};

export default todosSlice.reducer;
