import { PayloadAction } from '@reduxjs/toolkit';

import { changeFilterByColors, Color } from '~/domain/filters';

import { State } from '../types';

type Payload = {
  color: Color;
};

export const filterByColorsChangedReducer = (
  state: State,
  action: PayloadAction<Payload>,
): void => {
  const { color } = action.payload;
  const { filterByColors: filterByColors } = state.filters;
  state.filters.filterByColors = changeFilterByColors(filterByColors, color);
};
