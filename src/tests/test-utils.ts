import { render } from '@testing-library/react';
import { ReactElement } from 'react';

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

export const customRender = (ui: ReactElement, options = {}) => {
  return render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  });
};
