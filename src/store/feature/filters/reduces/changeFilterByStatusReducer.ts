import { PayloadAction } from '@reduxjs/toolkit';

import { Status } from '~/domain/filter';

import { State } from '../types';

type Payload = {
  status: Status;
};

export const changeFilterByStatusReducer = (
  state: State,
  action: PayloadAction<Payload>,
): void => {
  const { status } = action.payload;
  state.status = status;
};
