import { render, screen, waitFor } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { mallStore } from '../stores/MallStore';

import StorePage from './StorePage';

test('storePage', async () => {
  mallStore.fetchProducts(1);

  render((
    <MemoryRouter>
      <StorePage />
    </MemoryRouter>
  ));

  screen.getByText(/상품이 존재하지 않습니다/);

  await waitFor(() => {
    screen.getByText(/캔디 글레이즈 컬러밤/);
    screen.getByText(/바디워시/);
  });
});
