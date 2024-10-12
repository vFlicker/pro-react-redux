import { PayloadAction } from '@reduxjs/toolkit';

import { todosAdapter } from '../helpers';
import { State } from '../types';

type Payload = {
  id: UniqueId;
};

export const todoDeletedReducer = (
  state: State,
  action: PayloadAction<Payload>,
): void => {
  todosAdapter.removeOne(state, action.payload.id);
};
