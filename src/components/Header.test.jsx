import { render, screen, waitFor } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

test('Header', async () => {
  render((
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ));

  await waitFor(() => {
    screen.getByText(/홈/);
    screen.getByText(/내 잔액: 50,000원/);
  });
});
