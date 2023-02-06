import { createSlice } from '@reduxjs/toolkit';

import { todos } from '~/services/mockData';

import { RootState } from '../..';
import { changeTodoColorReducer } from './reduces/changeTodoColorReducer';
import { clearCompletedTodosReducer } from './reduces/clearCompletedTodosReducer';
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
    toggleTodoComplied: toggleTodoCompletedReducer,
    removeTodo: removeTodoReducer,
    clearCompletedTodos: clearCompletedTodosReducer,
  },
});

export const {
  changeTodoColor,
  toggleTodoComplied,
  removeTodo,
  clearCompletedTodos,
} = todosSlice.actions;

export const selectTodos = (state: RootState) => state.TODOS.todos;

export default todosSlice.reducer;
