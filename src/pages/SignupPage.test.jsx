import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import SignupPage from './SignupPage';

test('signupPage', async () => {
  render((
    <MemoryRouter>
      <SignupPage />
    </MemoryRouter>
  ));

  screen.getByRole('button', { name: '회원가입' });
});
