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
);

export default server;
