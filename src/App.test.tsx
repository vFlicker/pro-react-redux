import { render, screen, userEvent } from '~/tests/test-utils';

import { App } from './App';

describe('Component: App', () => {
  describe('when rendered', () => {
    it('the Vite logo should be visible', () => {
      render(<App />);

      const viteLogo = screen.getByRole('link', { name: /Vite logo/i });
      expect(viteLogo).toBeInTheDocument();
    });

    it('the React logo should be visible', () => {
      render(<App />);

      const reactLogo = screen.getByRole('link', {
        name: /React logo/i,
      });

      expect(reactLogo).toBeInTheDocument();
    });

    it('the title should be visible', () => {
      render(<App />);

      const title = screen.getByText(/Vite \+ React/i);
      expect(title).toBeInTheDocument();
    });

    it('the description should be visible', () => {
      render(<App />);

      const description = screen.getByText(
        /Click on the Vite and React logos to learn more/i,
      );

      expect(description).toBeInTheDocument();
    });
  });

  describe('when button clicked', () => {
    it('should increment count by 1', async () => {
      render(<App />);

      const button = screen.getByRole('button');
      await userEvent.click(button);

      expect(screen.getByText(/count is 1/)).toBeInTheDocument();
    });
  });
});
