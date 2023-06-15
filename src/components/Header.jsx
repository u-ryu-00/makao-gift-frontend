import { Link, NavLink, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import { useLocalStorage } from 'usehooks-ts';

import styled from 'styled-components';

import Account from './Account';

import useMallStore from '../hooks/useMallStore';

const Menu = styled.ul`
  display:flex;
  align-items: center;

  li {
    margin-left: 5rem; 
  }

  li:first-child {
    font-weight: 700;
    font-size: 2.4rem;
  }
`;

const Join = styled.ul`
  display:flex;
  align-items: center;

  li {
    margin-left: 5rem; 
  }
`;

const Container = styled.header`
  display: flex;
  justify-content: space-around;
  height: 6.4rem;
  border-bottom: 0.1rem solid #D9D9D9;
  width: 100%;
`;

const StyledNavLink = styled(NavLink)`
  position: relative;

  &.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.3rem;;
    background-color: #22DAAB
  }
`;

export default function Header() {
  const navigate = useNavigate();

  const mallStore = useMallStore();

  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');

  useEffect(() => {
    if (accessToken) {
      mallStore.fetchAccount();
    }
  }, []);

  const handleLogout = () => {
    setAccessToken('');
    navigate('/');
  };

  return (
    <Container>
      <Menu>
        <li>
          선물하기
        </li>
        <li>
          <StyledNavLink to="/" activeclassname="active">홈</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/products" activeclassname="active">스토어</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/orders" activeclassname="active">주문조회</StyledNavLink>
        </li>
      </Menu>
      <Join>
        {accessToken ? (
          <>
            <li>
              <Account />
            </li>
            <li>
              <Link to="/" onClick={handleLogout}>로그아웃</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
          </>
        )}
      </Join>
    </Container>
  );
}
