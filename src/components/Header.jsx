import { Link } from 'react-router-dom';

import { useEffect } from 'react';
import Account from './Account';
import useMallStore from '../hooks/useMallStore';

export default function Header() {
  const mallStore = useMallStore();

  useEffect(() => {
    mallStore.fetchAccount();
  }, []);

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
          <li>
            <Link to="/signup">회원가입</Link>
          </li>
          <li>
            <Account />
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
