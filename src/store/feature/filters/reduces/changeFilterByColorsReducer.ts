import { PayloadAction } from '@reduxjs/toolkit';

import { changeFilterByColor, Color } from '~/domain/filters';

import { State } from '../types';

type Payload = {
  color: Color;
};

export const changeFilterByColorsReducer = (
  state: State,
  action: PayloadAction<Payload>,
): void => {
  const { color } = action.payload;
  const { filterByColors } = state.filters;
  state.filters.filterByColors = changeFilterByColor(filterByColors, color);
};
