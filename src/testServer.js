import { rest } from 'msw';

import { setupServer } from 'msw/node';

import config from './config';

const baseUrl = config.apiBaseUrl;

const server = setupServer(
  rest.post(`${baseUrl}/session`, async (req, res, ctx) => {
    const { userId, password } = await req.json();
    if (userId === 'a111' && password === 'Aa1!!!!!') {
      return res(ctx.json({
        accessToken: 'ACCESS.TOKEN',
        amount: 50_000,
      }));
    }
    return res(ctx.status(400));
  }),
  rest.get(`${baseUrl}/accounts/me`, async (req, res, ctx) => res(ctx.json({
    userId: 'a111',
    amount: 50_000,
  }))),
  rest.get(`${baseUrl}/products`, async (req, res, ctx) => res(ctx.json({
    products: [
      {
        id: 1,
        title: '[단독각인] 캔디 글레이즈 컬러밤',
        company: '입생로랑',
        price: 49_000,
        description: '투명하게 녹아 맑게 빛나는 컬러 글로우 밤',
        imageUrl: 'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20230516143408_834e86474204499b9fb85a2a3911ddfa.jpg',
      },
      {
        id: 2,
        title: '[선물포장] 바디워시 (4종 택1)',
        company: '탬버린즈',
        price: 33_000,
        description: '물에 닿는 순간 풍성한 거품으로 변해 피부를 부드럽게 씻어내어 자연의 향으로 감싸줍니다',
        imageUrl: 'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20221124180904_d7730ce8710a45a084a62ee6c1f56766.jpg',
      },
    ],
  }))),
  rest.get(`${baseUrl}/products/1`, async (req, res, ctx) => res(ctx.json({
    title: '[단독각인] 캔디 글레이즈 컬러밤',
    company: '입생로랑',
    price: 49_000,
    description: '투명하게 녹아 맑게 빛나는 컬러 글로우 밤',
    imageUrl: 'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20230516143408_834e86474204499b9fb85a2a3911ddfa.jpg',
  }))),
  rest.get(`${baseUrl}/orders`, async (req, res, ctx) => res(ctx.json({
    orders: [
      {
        orderId: 1,
        userId: 'a111',
        productId: 1,
        title: '[단독각인] 캔디 글레이즈 컬러밤',
        company: '입생로랑',
        description: '투명하게 녹아 맑게 빛나는 컬러 글로우 밤',
        imageUrl: 'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20230516143408_834e86474204499b9fb85a2a3911ddfa.jpg',
        quantity: 1,
        totalPrice: 49_000,
        receiver: '받는 사람',
        address: '주소',
        message: '메시지',
        createdAt: '2023-06-10',
      },
      {
        orderId: 2,
        userId: 'a111',
        productId: 2,
        title: '[선물포장] 바디워시 (4종 택1)',
        company: '탬버린즈',
        description: '물에 닿는 순간 풍성한 거품으로 변해 피부를 부드럽게 씻어내어 자연의 향으로 감싸줍니다',
        imageUrl: 'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20221124180904_d7730ce8710a45a084a62ee6c1f56766.jpg',
        quantity: 1,
        totalPrice: 33_000,
        receiver: '받는 사람',
        address: '주소',
        message: '메시지',
        createdAt: '2023-06-10',
      },
    ],
  }))),
  rest.get(`${baseUrl}/orders/1`, async (req, res, ctx) => res(ctx.json({
    orderId: 1,
    productId: 1,
    title: '[단독각인] 캔디 글레이즈 컬러밤',
    company: '입생로랑',
    description: '투명하게 녹아 맑게 빛나는 컬러 글로우 밤',
    imageUrl: 'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20230516143408_834e86474204499b9fb85a2a3911ddfa.jpg',
    quantity: 1,
    totalPrice: 49_000,
    receiver: '받는 사람',
    address: '주소',
    message: '메시지',
    createdAt: '2023-06-10',
  }))),
  rest.post(`${baseUrl}/orders`, async (req, res, ctx) => res(ctx.json({
    userId: 'a111',
    productId: 1,
    title: '[단독각인] 캔디 글레이즈 컬러밤',
    company: '입생로랑',
    description: '투명하게 녹아 맑게 빛나는 컬러 글로우 밤',
    imageUrl: 'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20230516143408_834e86474204499b9fb85a2a3911ddfa.jpg',
    quantity: 1,
    receiver: '받는 사람',
    address: '주소',
    message: '메시지',
  }))),
);

export default server;
