import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import styled from 'styled-components';
import useMallStore from '../hooks/useMallStore';

import numberFormat from '../utils/numberFormat';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;


  img {
    padding: 5rem
  }
`;

export default function Product() {
  const [accessToken] = useLocalStorage('accessToken');

  const navigate = useNavigate();

  const location = useLocation();

  const mallStore = useMallStore();

  const [isError, setError] = useState(false);

  const minusButtonClick = () => {
    mallStore.minusQuantityAndTotalPrice();
  };

  const plusButtonClick = () => {
    mallStore.plusQuantityAndTotalPrice();
  };

  const presentButtonClick = () => {
    if (!accessToken) {
      navigate('/login');

      return;
    }

    if (mallStore.amount < mallStore.totalPrice) {
      setError(true);
      return;
    }
    navigate('/order');
  };

  const redirectToLogin = () => {
    navigate(`/login?redirect=${encodeURIComponent(location.pathname)}`);
  };

  return (
    <Container>
      <img src={mallStore.imageUrl} alt="상품 사진" style={{ width: '60rem', height: '60rem' }} />
      <div>
        <h1>{mallStore.title}</h1>
        <h1>
          {numberFormat(mallStore.price)}
          원
        </h1>
        <h1>
          제조사
        </h1>
        {mallStore.company}
        <h1>구매수량</h1>
        <section>
          <button
            type="button"
            onClick={minusButtonClick}
            disabled={mallStore.quantity <= 1}
          >
            -
          </button>
          <p>{mallStore.quantity}</p>
          <button
            type="button"
            onClick={plusButtonClick}
          >
            +
          </button>
        </section>
        <h1>
          상품설명
        </h1>
        {mallStore.description}

        <h1>
          총 상품금액:
        </h1>
        {mallStore.totalPrice}
        <button
          type="button"
          onClick={accessToken ? presentButtonClick : redirectToLogin}
        >
          선물하기
        </button>
        { isError
          ? <p>❌ 잔액이 부족하여 선물하기가 불가합니다 ❌ </p> : null }
      </div>
    </Container>
  );
}
