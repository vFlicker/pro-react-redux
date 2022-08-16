import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { ApiService } from '../services';
import { rootReducer } from './reducers';

const apiService = new ApiService();

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware.withExtraArgument(apiService))
);

