import { createSlice } from '@reduxjs/toolkit';

import { Status } from '~/domain/filter';

import { RootState } from '../..';
import { changeFilterByStatusReducer } from './reduces/changeFilterByStatusReducer';
import { State } from './types';

const initialState: State = {
  status: 'all',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilterByStatus: changeFilterByStatusReducer,
  },
});

export const { changeFilterByStatus } = filtersSlice.actions;

export const selectFilterByStatus = (state: RootState): Status => {
  return state.FILTERS.status;
};

export default filtersSlice.reducer;
