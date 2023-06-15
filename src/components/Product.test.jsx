import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { mallStore } from '../stores/MallStore';

import Product from './Product';

test('product', async () => {
  await mallStore.fetchProduct(1);

  render((
    <MemoryRouter>
      <Product />
    </MemoryRouter>
  ));

  screen.getByText(/제조사/);
  screen.getByText(/캔디 글레이즈 컬러밤/);
});
