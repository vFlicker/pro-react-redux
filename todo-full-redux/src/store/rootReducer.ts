import { combineReducers } from 'redux';

import filtersReducer from './feature/filters/filtersSlice';
import todosReducer from './feature/todos/todosSlice';

export const rootReducer = combineReducers({
  FILTERS: filtersReducer,
  TODOS: todosReducer,
});
