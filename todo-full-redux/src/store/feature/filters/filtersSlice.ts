import { createSlice } from '@reduxjs/toolkit';

import { Color, Status } from '~/domain/filters';

import { RootState } from '../..';
import { filterByStatusChangedReducer } from './reduces/filterByStatusChangedReducer';
import { filterByColorsChangedReducer } from './reduces/filterByColorsChangedReducer';
import { State } from './types';
import { filterByTermChangedReducer } from './reduces/filterByTermChangedReducer';

const initialState: State = {
  filterByColors: [],
  filterByTerm: '',
  filterByStatus: Status.All,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterByColorChanged: filterByColorsChangedReducer,
    filterByStatusChanged: filterByStatusChangedReducer,
    filterByTermChanged: filterByTermChangedReducer,
  },
});

export const {
  filterByColorChanged,
  filterByStatusChanged,
  filterByTermChanged,
} = filtersSlice.actions;

export const selectFilterByColors = (state: RootState): Color[] => {
  return state.FILTERS.filterByColors;
};

export const selectFilterByStatus = (state: RootState): Status => {
  return state.FILTERS.filterByStatus;
};

export default filtersSlice.reducer;
