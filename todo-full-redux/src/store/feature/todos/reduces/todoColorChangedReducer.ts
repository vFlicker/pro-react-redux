import { PayloadAction } from '@reduxjs/toolkit';

import { Color } from '~/domain/filters';

import { State } from '../types';

type Payload = {
  id: UniqueId;
  color: Color;
};

export const todoColorChangedReducer = (
  state: State,
  action: PayloadAction<Payload>,
): void => {
  const { id, color } = action.payload;
  const todo = state.entities[id];

  if (todo) todo.color = color;
};
