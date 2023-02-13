import { Color, Filters, Status } from './filters';

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

export const filterTodos = (todos: Todo[], filters: Filters) => {
  const { filterByColors, filterByTerm, filterByStatus } = filters;

  // All cases where filters return all todos
  const showAllColors = filterByColors.length === 0;
  const showAllStatuses = filterByStatus === Status.All;
  const showAllTerms = filterByTerm === '';

  // If all filters have a value where all todos are returned,
  // we can return all todos before filtering
  if (showAllColors && showAllStatuses && showAllTerms) return todos;

  const isCompleted = filterByStatus === Status.Completed;

  return todos.filter((todo) => {
    // Find out if the todo satisfies the filters
    const colorMatcher = showAllColors || filterByColors.includes(todo.color);
    const statusMatcher = showAllStatuses || todo.isCompleted === isCompleted;
    const termMatcher = showAllTerms || todo.title.startsWith(filterByTerm);

    return colorMatcher && statusMatcher && termMatcher;
  });
};
