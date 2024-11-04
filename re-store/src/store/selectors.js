import { createSelector } from '@reduxjs/toolkit';

import { ReducerName } from '../constants';

export const selectBookById = (state, id) => {
  return state[ReducerName.BOOK].books.find((book) => book.id === id);
};

export const selectCartItems = (state) => {
  return state[ReducerName.CART].items;
};

export const selectOrderTotal = createSelector(selectCartItems, (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.total, 0);
});
