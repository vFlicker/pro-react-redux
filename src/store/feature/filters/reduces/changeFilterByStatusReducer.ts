import { PayloadAction } from '@reduxjs/toolkit';

import { Status } from '~/domain/filters';

import { State } from '../types';

type Payload = {
  status: Status;
};

export const changeFilterByStatusReducer = (
  state: State,
  action: PayloadAction<Payload>,
): void => {
  /* TODO: Навіщо тут деструктуризація */
  const { status } = action.payload;
  state.filters.filterByStatus = status;
};
