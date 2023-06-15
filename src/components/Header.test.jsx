import { fireEvent, render, screen } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

import theme from '../styles/theme';

const context = describe;

const navigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // Keep the original functionality
  NavLink: jest.fn().mockImplementation(({ children, to }) => (
    <a href={to}>{children}</a>
  )),
  useNavigate: () => navigate,
}));

describe('Header', () => {
  function renderHeader() {
    render((
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </ThemeProvider>
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
