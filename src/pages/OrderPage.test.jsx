import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { mallStore } from '../stores/MallStore';

import OrderPage from './OrderPage';

test('orderPage', async () => {
  await mallStore.requestPresent({
    userId: 'a111',
    productId: 1,
    title: '[단독각인] 캔디 글레이즈 컬러밤',
    company: '입생로랑',
    description: '투명하게 녹아 맑게 빛나는 컬러 글로우 밤',
    imageUrl: 'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20230516143408_834e86474204499b9fb85a2a3911ddfa.jpg',
    quantity: 1,
    recevier: '받는 사람',
    address: '주소',
    message: '메시지',
  });

  render((
    <MemoryRouter>
      <OrderPage />
    </MemoryRouter>
  ));

  screen.getByText(/받는 분 성함/);
});
