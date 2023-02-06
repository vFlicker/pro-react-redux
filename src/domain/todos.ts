import { Color } from './filter';

export type Todo = {
  id: UniqueId;
  title: string;
  isCompleted: boolean;
  color: Color;
};

export const updateCompleted = (todo: Todo, isCompleted: boolean) => {
  return {
    ...todo,
    isCompleted,
  };
};

export const updateColor = (todo: Todo, color: Color) => {
  return {
    ...todo,
    color,
  };
};

export const findTodoById = (todos: Todo[], id: UniqueId): Todo | null => {
  return todos.find((product) => product.id === id) ?? null;
};

export const addTodo = (todos: Todo[], todo: Todo): Todo[] => {
  return [...todos, todo];
};

export const removeTodo = (todos: Todo[], todo: Todo): Todo[] => {
  const index = todos.findIndex(({ id }) => id === todo.id);
  return [...todos.slice(0, index), ...todos.slice(index + 1)];
};

export const updateTodos = (todos: Todo[], todo: Todo): Todo[] => {
  const index = todos.findIndex(({ id }) => id === todo.id);
  return [...todos.slice(0, index), todo, ...todos.slice(index + 1)];
};

export const clearCompletedTodos = (todos: Todo[]) => {
  return todos.filter((todo) => todo.isCompleted === false);
};
