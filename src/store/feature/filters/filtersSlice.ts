import { createSlice } from '@reduxjs/toolkit';

import { Color, Status } from '~/domain/filters';

import { RootState } from '../..';
import { filterByStatusChangedReducer } from './reduces/filterByStatusChangedReducer';
import { filterByColorsChangedReducer } from './reduces/filterByColorsChangedReducer';
import { State } from './types';

const initialState: State = {
  filters: {
    filterByColors: [],
    filterByStatus: Status.All,
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterByColorChanged: filterByColorsChangedReducer,
    filterByStatusChanged: filterByStatusChangedReducer,
  },
});

export const { filterByColorChanged, filterByStatusChanged } =
  filtersSlice.actions;

export const selectFilterByColors = (state: RootState): Color[] => {
  return state.FILTERS.filters.filterByColors;
};

export const selectFilterByStatus = (state: RootState): Status => {
  return state.FILTERS.filters.filterByStatus;
};

export default filtersSlice.reducer;
