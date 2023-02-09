import { createSlice } from '@reduxjs/toolkit';

import { Status } from '~/domain/filter';
import { Todo } from '~/domain/todos';
import { todos } from '~/services/mockData';

import { RootState } from '../..';
import { changeTodoColorReducer } from './reduces/changeTodoColorReducer';
import { clearCompletedTodosReducer } from './reduces/clearCompletedTodosReducer';
import { markTodosCompletedReducer } from './reduces/markTodosCompletedReducer';
import { removeTodoReducer } from './reduces/removeTodoReducer';
import { toggleTodoCompletedReducer } from './reduces/toggleTodoCompliedReducer';
import { State } from './types';

const initialState: State = {
  todos,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    changeTodoColor: changeTodoColorReducer,
    clearCompletedTodos: clearCompletedTodosReducer,
    markTodosCompleted: markTodosCompletedReducer,
    toggleTodoComplied: toggleTodoCompletedReducer,
    removeTodo: removeTodoReducer,
  },
});

export const {
  changeTodoColor,
  clearCompletedTodos,
  markTodosCompleted,
  toggleTodoComplied,
  removeTodo,
} = todosSlice.actions;

export const selectTodos = (
  state: RootState,
  filterByStatus: Status,
): Todo[] => {
  switch (filterByStatus) {
    case 'active':
      return state.TODOS.todos.filter((todo) => !todo.isCompleted);
    case 'all':
      return state.TODOS.todos;
    case 'completed':
      return state.TODOS.todos.filter((todo) => todo.isCompleted);
  }
};

export const selectTodosLeftCount = (state: RootState): number => {
  const completedTasks = state.TODOS.todos.filter(
    (todo) => todo.isCompleted === false,
  );

  return completedTasks.length;
};

export default todosSlice.reducer;
