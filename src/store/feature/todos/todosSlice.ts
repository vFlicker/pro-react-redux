import { createSelector, createSlice } from '@reduxjs/toolkit';

import { filterTodosByColors, filterTodosByStatus, Todo } from '~/domain/todos';
import { todos } from '~/services/mockData';

import { RootState } from '../..';
import { addTodoReducer } from './reduces/addTodoReducer';
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
    /* TODO: змінити назву на минулий час */
    addTodo: addTodoReducer,
    /* TODO: подивитись як працює prepare,
    ми можемо передавати аргументи замість об'єкт */
    changeTodoColor: changeTodoColorReducer,
    clearCompletedTodos: clearCompletedTodosReducer,
    markTodosCompleted: markTodosCompletedReducer,
    toggleTodoComplied: toggleTodoCompletedReducer,
    removeTodo: removeTodoReducer,
  },
});

export const {
  addTodo,
  changeTodoColor,
  clearCompletedTodos,
  markTodosCompleted,
  toggleTodoComplied,
  removeTodo,
} = todosSlice.actions;

const selectTodos = (state: RootState): Todo[] => state.TODOS.todos;

export const selectFilteredTodos = createSelector(
  selectTodos,
  (state: RootState) => state.FILTERS.filters,
  (todos, filters) => {
    const { filterByColors, filterByStatus } = filters;

    const filteredTodosByStatus = filterTodosByStatus(todos, filterByStatus);
    return filterTodosByColors(filteredTodosByStatus, filterByColors);
  },
);

export const selectRemainingTodos = (state: RootState): number => {
  const completedTasks = state.TODOS.todos.filter(
    (todo) => todo.isCompleted === false,
  );

  return completedTasks.length;
};

export default todosSlice.reducer;
