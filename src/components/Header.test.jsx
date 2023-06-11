import { fireEvent, render, screen } from '@testing-library/react';

import Header from './Header';

const context = describe;

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  Link({ children, to }) {
    return (
      <a href={to}>
        {children}
      </a>
    );
  },
  useNavigate() {
    return navigate;
  },
}));

describe('Header', () => {
  function renderHeader() {
    render((
      <Header />
    ));
  }

  it('renders "Home" link', () => {
    renderHeader();

    screen.getByText(/홈/);
  });

  context('without logged in', () => {
    beforeEach(() => {
      localStorage.removeItem('accessToken');
    });

    it('renders "로그인" button', () => {
      renderHeader();

      screen.getByText(/로그인/);
    });
  });

  context('with logged in', () => {
    beforeEach(() => {
      localStorage.setItem('accessToken', JSON.stringify('ACCESS.TOKEN'));
    });

    it('renders "로그아웃" button', () => {
      renderHeader();

      fireEvent.click(screen.getByText(/로그아웃/));

      expect(navigate).toBeCalledWith('/');
    });
  });
});
