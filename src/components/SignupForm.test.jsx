import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignupForm from './SignupForm';

test('signupForm', async () => {
  render((
    <MemoryRouter>
      <SignupForm />
    </MemoryRouter>
  ));

  screen.getByRole('button', { name: '회원가입' });
});
