import { Color, Status } from './filters';

export type Todo = {
  id: UniqueId;
  title: string;
  isCompleted: boolean;
  color: Color;
};

export const createTodo = (title: string): Todo => ({
  id: new Date().toISOString(),
  title,
  isCompleted: false,
  color: Color.Transparent,
});

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

export const markTodosCompleted = (todos: Todo[]) => {
  return todos.map((todo) => ({ ...todo, isCompleted: true }));
};

export const filterTodosByStatus = (todos: Todo[], filter: Status): Todo[] => {
  switch (filter) {
    case Status.Active:
      return todos.filter((todo) => !todo.isCompleted);
    case Status.All:
      return todos;
    case Status.Completed:
      return todos.filter((todo) => todo.isCompleted);
  }
};

export const filterTodosByColors = (todos: Todo[], filter: Color[]): Todo[] => {
  if (filter.length === 0) return todos;
  return todos.filter((todo) => filter.includes(todo.color));
};
