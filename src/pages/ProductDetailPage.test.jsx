import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import ProductDetailPage from './ProductDetailPage';

import { mallStore } from '../stores/MallStore';

test('ProductDetailPage', async () => {
  await mallStore.fetchProduct(1);

  render((
    <MemoryRouter>
      <ProductDetailPage />
    </MemoryRouter>
  ));

  screen.getByText(/제조사/);
  screen.getByText(/캔디 글레이즈 컬러밤/);
});
