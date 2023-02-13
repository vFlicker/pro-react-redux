import { PayloadAction } from '@reduxjs/toolkit';

import { TermString } from '~/domain/filters';

import { State } from '../types';

type Payload = {
  term: TermString;
};

export const filterByTermChangedReducer = (
  state: State,
  action: PayloadAction<Payload>,
): void => {
  state.filterByTerm = action.payload.term;
};
