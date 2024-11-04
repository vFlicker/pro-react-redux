import { configureStore } from '@reduxjs/toolkit';

import { ReducerName } from '../constants';
import { ApiService } from '../services/api-service';
import { bookReducer } from './features/book/book-slice';
import { cartReducer } from './features/cart/cart-slice';

const apiService = new ApiService();

const middlewareConfiguration = {
  thunk: { extraArgument: apiService },
};

export const store = configureStore({
  reducer: {
    [ReducerName.BOOK]: bookReducer,
    [ReducerName.CART]: cartReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware(middlewareConfiguration);
  },
});
