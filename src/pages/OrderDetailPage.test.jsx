import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { mallStore } from '../stores/MallStore';

import OrderDetailPage from './OrderDetailPage';

test('orderDetailPage', async () => {
  await mallStore.fetchOrder(1);

  render((
    <MemoryRouter>
      <OrderDetailPage />
    </MemoryRouter>
  ));

  screen.getByText(/구매수량/);
  screen.getByText(/캔디 글레이즈 컬러밤/);
});
