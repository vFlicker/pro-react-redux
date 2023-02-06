import { createSlice } from '@reduxjs/toolkit';

import { todos } from '~/services/mockData';

import { RootState } from '../..';
import { State } from './types';

const initialState: State = {
  todos,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
});

export const selectTodos = (state: RootState) => state.TODOS.todos;

export default todosSlice.reducer;
