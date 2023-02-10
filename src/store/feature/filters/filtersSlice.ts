import { createSlice } from '@reduxjs/toolkit';

import { Color, Status } from '~/domain/filters';

import { RootState } from '../..';
import { changeFilterByStatusReducer } from './reduces/changeFilterByStatusReducer';
import { changeFilterByColorsReducer } from './reduces/changeFilterByColorsReducer';
import { State } from './types';

const initialState: State = {
  filters: {
    filterByColors: [],
    filterByStatus: 'all',
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilterByColors: changeFilterByColorsReducer,
    changeFilterByStatus: changeFilterByStatusReducer,
  },
});

export const { changeFilterByColors, changeFilterByStatus } =
  filtersSlice.actions;

export const selectFilterByColors = (state: RootState): Color[] => {
  return state.FILTERS.filters.filterByColors;
};

export const selectFilterByStatus = (state: RootState): Status => {
  return state.FILTERS.filters.filterByStatus;
};

export default filtersSlice.reducer;
