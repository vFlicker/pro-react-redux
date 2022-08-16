import { combineReducers } from 'redux';

import ShoppingCartSlice from './shopping-cart';

export const rootReducer = combineReducers({
  shoppingCart: ShoppingCartSlice.reducer,
});
