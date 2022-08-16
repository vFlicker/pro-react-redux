import { configureStore } from '@reduxjs/toolkit';

import { ApiService } from '../services';
import { rootReducer } from './reducers/root-reducer';

const apiService = new ApiService();

const middlewareConfiguration = {
  thunk: {
    extraArgument: apiService,
  },
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewareConfiguration)
});
