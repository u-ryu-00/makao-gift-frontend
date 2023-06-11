import { Link, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import Account from './Account';
import useMallStore from '../hooks/useMallStore';

export default function Header() {
  const navigate = useNavigate();

  const mallStore = useMallStore();

  useEffect(() => {
    mallStore.fetchAccount();
  }, []);

  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');

  const handleLogout = () => {
    setAccessToken('');
    navigate('/');
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            선물하기
          </li>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/products">스토어</Link>
          </li>
          <li>
            <Link to="/orders">주문조회</Link>
          </li>
          {accessToken ? (
            <>
              <li>
                <Account />
              </li>
              <li>
                <button type="button" onClick={handleLogout}>로그아웃</button>
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
        </ul>
      </nav>
    </header>
  );
}
