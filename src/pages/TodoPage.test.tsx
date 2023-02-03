import { vi } from 'vitest';

import { render, screen } from '~/tests/test-utils';

import { TodoPage } from './TodoPage';

vi.mock('../components/TodoApp', () => {
  const MockTodoApp = () => <>This is mock TodoApp</>;

  return {
    TodoApp: MockTodoApp,
  };
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('when rendered', () => {
  it('the title should be visible', () => {
    render(<TodoPage />);
    expect(screen.getByText(/Todos/i)).toBeInTheDocument();
  });

  it('TodoApp should be visible', () => {
    render(<TodoPage />);
    expect(screen.getByText(/This is mock TodoApp/i)).toBeInTheDocument();
  });
});
