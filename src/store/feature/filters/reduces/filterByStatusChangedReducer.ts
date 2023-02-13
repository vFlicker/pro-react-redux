import { PayloadAction } from '@reduxjs/toolkit';

import { Status } from '~/domain/filters';

import { State } from '../types';

type Payload = {
  status: Status;
};

export const filterByStatusChangedReducer = (
  state: State,
  action: PayloadAction<Payload>,
): void => {
  state.filterByStatus = action.payload.status;
};
