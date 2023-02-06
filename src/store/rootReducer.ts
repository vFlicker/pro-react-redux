import { combineReducers } from 'redux';

import todosReducer from './feature/todos/todosSlice';

export const rootReducer = combineReducers({
  TODOS: todosReducer,
});
