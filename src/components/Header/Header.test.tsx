import { render, screen } from '~/tests/test-utils';

import { Header } from './Header';

describe('when rendered', () => {
  it('the title should be visible', () => {
    render(<Header />);
    expect(screen.getByText(/Redux Fundamentals Example/i)).toBeInTheDocument();
  });
});
