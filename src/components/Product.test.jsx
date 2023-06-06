import { render, screen } from '@testing-library/react';

import { mallStore } from '../stores/MallStore';

import Product from './Product';

test('product', async () => {
  await mallStore.fetchProduct(1);

  render((
    <Product />
  ));

  screen.getByText(/제조사/);
  screen.getByText(/캔디 글레이즈 컬러밤/);
});
