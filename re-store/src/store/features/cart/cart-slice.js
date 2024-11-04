import { createSlice } from '@reduxjs/toolkit';

import { allItemsRemoved } from './reducers/all-items-removed';
import { itemAdded } from './reducers/item-added';
import { itemRemoved } from './reducers/item-removed';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    itemAdded,
    itemRemoved,
    allItemsRemoved,
  },
});

export const cartAction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
