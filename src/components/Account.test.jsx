import { render, screen } from '@testing-library/react';

import { mallStore } from '../stores/MallStore';

import Account from './Account';

test('Account', async () => {
  await mallStore.fetchAccount();

  render(<Account />);

  screen.getByText(/내 잔액: 50,000원/);
});
