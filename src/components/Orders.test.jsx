import { render, screen, waitFor } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { mallStore } from '../stores/MallStore';

import Orders from './Orders';

test('orders', async () => {
  mallStore.fetchOrders();

  render((
    <MemoryRouter>
      <Orders />
    </MemoryRouter>
  ));

  screen.getByText(/내가 주문한 내역이 없습니다/);

  await waitFor(() => {
    screen.getByText(/내가 주문한 내역입니다/);

    screen.getByText(/캔디 글레이즈 컬러밤/);
    screen.getByText(/바디워시/);
  });
});
