import { createSelector, createSlice } from '@reduxjs/toolkit';
import { normalize, schema } from 'normalizr';

import { filterTodos, Todo } from '~/domain/todos';
import { todos } from '~/services/mockData';

import { RootState } from '../..';
import { todoAddedReducer } from './reduces/todoAddedReducer';
import { allTodosCompletedReducer } from './reduces/allTodosCompletedReducer';
import { completedTodosClearedReducer } from './reduces/completedTodosClearedReducer';
import { todoColorChangedReducer } from './reduces/todoColorChangedReducer';
import { todoDeletedReducer } from './reduces/todoDeletedReducer';
import { todoToggledReducer } from './reduces/todoToggledReducer';
import { State } from './types';
import { todosAdapter } from './helpers';

type NormalizeData = {
  todos: { [key: string]: Todo };
};

const todoSchema = new schema.Entity<Todo>('todos');
const todoListSchema = new schema.Array(todoSchema);
const normalizedData = normalize<Todo[], NormalizeData>(todos, todoListSchema);

const initialState: State = {
  entities: normalizedData.entities.todos,
  ids: normalizedData.result,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: todoAddedReducer,
    todoColorChanged: todoColorChangedReducer,
    completedTodosCleared: completedTodosClearedReducer,
    allTodosCompleted: allTodosCompletedReducer,
    todoToggled: todoToggledReducer,
    todoDeleted: todoDeletedReducer,
  },
});

export const {
  todoAdded,
  todoColorChanged,
  completedTodosCleared,
  allTodosCompleted,
  todoToggled,
  todoDeleted,
} = todosSlice.actions;

const todosSelectors = todosAdapter.getSelectors(
  (state: RootState) => state.TODOS,
);

export const selectTodoById = (state: RootState, id: UniqueId): Todo => {
  return todosSelectors.selectById(state, id) as Todo;
};

export const selectFilteredTodos = createSelector(
  todosSelectors.selectAll,
  (state: RootState) => state.FILTERS,
  (todos, filters): Todo[] => {
    const filteredTodos = filterTodos(todos, filters);
    return filteredTodos;
  },
);

export const selectFilteredTodosIds = createSelector(
  selectFilteredTodos,
  (filteredTodos): UniqueId[] => {
    return filteredTodos.map((filteredTodo) => filteredTodo.id);
  },
);

export const selectRemainingTodos = createSelector(
  todosSelectors.selectAll,
  (todos): number => {
    const completedTodos = todos.filter((todo) => todo.isCompleted === false);
    return completedTodos.length;
  },
);

export default todosSlice.reducer;
