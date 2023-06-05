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
      },
    ],
  }))),
);

export default server;
