import { PayloadAction } from '@reduxjs/toolkit';

import { State } from '../types';

type Payload = {
  id: UniqueId;
};

export const todoToggledReducer = (
  state: State,
  action: PayloadAction<Payload>,
): void => {
  const todo = state.entities[action.payload.id];

  if (todo) todo.isCompleted = !todo.isCompleted;
};
