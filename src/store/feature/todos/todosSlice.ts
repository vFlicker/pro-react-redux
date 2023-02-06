import { createSlice } from '@reduxjs/toolkit';

import { todos } from '~/services/mockData';

import { RootState } from '../..';
import { changeColorReducer } from './reduces/changeColorReducer';
import { toggleCompletedReducer } from './reduces/toggleCompliedReducer';
import { State } from './types';

const initialState: State = {
  todos,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    changeColor: changeColorReducer,
    toggleComplied: toggleCompletedReducer,
  },
});

export const { changeColor, toggleComplied } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.TODOS.todos;

export default todosSlice.reducer;
