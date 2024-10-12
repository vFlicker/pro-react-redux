import { combineReducers } from 'redux';

import { shoppingCartSlice } from './shopping-cart';

export const rootReducer = combineReducers({
  shoppingCart: shoppingCartSlice.reducer,
});
