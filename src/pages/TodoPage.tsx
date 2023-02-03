import { TodoApp } from '~/components/TodoApp';

export function TodoPage(): JSX.Element {
  return (
    <div className="container">
      <h2>Todos</h2>
      <TodoApp />
    </div>
  );
}
