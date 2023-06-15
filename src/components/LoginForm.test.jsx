import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';

import LoginForm from './LoginForm';

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  Link: ({ children, to }) => (
    <a href={to}>
      {children}
    </a>
  ),
  useNavigate: () => navigate,
  useLocation: () => ({
    search: '',
  }),
}));

jest.mock('usehooks-ts', () => ({
  useLocalStorage: () => ['', jest.fn()],
}));

jest.mock('../hooks/useMallStore', () => jest.fn(() => ({
  login: async () => 'mockAccessToken',
  loginState: '',
})));

describe('LoginForm', () => {
  test('should navigate to homepage on successful login', async () => {
    render(<LoginForm />);

    expect(screen.getByRole('heading', { name: 'USER LOGIN' })).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('아이디'), {
      target: { value: 'a111' },
    });

    fireEvent.change(screen.getByLabelText('비밀번호'), {
      target: { value: 'Aa1!!!!!' },
    });

    fireEvent.click(screen.getByRole('button', { name: '로그인하기' }));

    await waitFor(() => {
      expect(navigate).toBeCalledWith('/');
    });
  });
});
