import { Route, Routes } from 'react-router-dom';

import { Reset } from 'styled-reset';

import { useLocalStorage } from 'usehooks-ts';
import { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import StorePage from './pages/StorePage';
import ProductDetailPage from './pages/ProductDetailPage';
import OrderPage from './pages/OrderPage';
import OrdersPage from './pages/OrdersPage';
import OrderDetailPage from './pages/OrderDetailPage';

import GlobalStyle from './styles/GlobalStyle';
import { apiService } from './services/ApiService';
import SignupCompletePage from './pages/SignupCompletePage';
import theme from './styles/theme';

// const Main = styled.main`
//     padding: 1em;
//   `;

export default function App() {
  const [accessToken] = useLocalStorage('accessToken', '');

  useEffect(() => {
    apiService.setAccessToken(accessToken);
  }, [accessToken]);

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Header />
      {/* <Main> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signupComplete" element={<SignupCompletePage />} />
        <Route path="/products" element={<StorePage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/:id" element={<OrderDetailPage />} />
      </Routes>
      {/* </Main> */}
    </ThemeProvider>
  );
}
