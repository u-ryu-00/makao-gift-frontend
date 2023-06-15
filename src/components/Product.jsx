import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { useLocalStorage } from 'usehooks-ts';

import styled from 'styled-components';

import useMallStore from '../hooks/useMallStore';

import numberFormat from '../utils/numberFormat';

import Button from './ui/Button';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    padding: 5rem
  }

  h2 {
    font-weight: 500;
    font-size: 3rem;
    line-height: 3.8rem;
    margin-bottom: 3rem;
  }

  h1 {
    font-weight: 700;
    font-size: 40px;
  }

  h4 {
    font-weight: 500;
    font-size: 16px;
    color: #666666;
    margin-right: 5rem;
  }

  h5 {
    font-weight: 500;
    font-size: 16px;
    color: #444444;
    margin-right: 2.5rem;
  }

  h6 {
    display: flex;
    font-weight: 400;
    font-size: 2rem;
    flex-direction: row;
  }

  label {
    margin : 0 4rem;
  }
`;

const Divider = styled.hr`
  border: 0px;
  background: #D9D9D9;
  height: 0.1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const Bind = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  align-items: center;
`;

const BindCustom = styled(Bind)`
  display: flex;
  align-items: flex-end; 
  float: right;
`;

const Text = styled.div`
  width: 45rem;
  height: 60rem;
`;

const Error = styled.p`
  color : #FF424D;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
`;

const ControlButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.6rem;
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
      <Text>
        <h2 style={{ width: '45rem' }}>{mallStore.title}</h2>
        <h1>
          {numberFormat(mallStore.price)}
          원
        </h1>
        <Divider />
        <Bind>
          <h4>
            제조사
          </h4>
          <h6>
            {mallStore.company}
          </h6>
        </Bind>
        <Divider />
        <Bind>
          <h4>구매수량</h4>
          <ControlButton
            type="button"
            onClick={minusButtonClick}
            disabled={mallStore.quantity <= 1}
          >
            -
          </ControlButton>
          <label>{mallStore.quantity}</label>
          <ControlButton
            type="button"
            onClick={plusButtonClick}
          >
            +
          </ControlButton>
        </Bind>
        <Divider />
        <Bind>
          <h4>
            상품설명
          </h4>
          {mallStore.description}
        </Bind>
        <Divider />
        <BindCustom>
          <h5>
            총 상품금액:
          </h5>
          <h1>
            {numberFormat(mallStore.totalPrice)}
            원
          </h1>
        </BindCustom>
        <Button
          style={{ width: '45rem' }}
          type="button"
          onClick={accessToken ? presentButtonClick : redirectToLogin}
        >
          선물하기
        </Button>
        { isError
          ? <Error>❌ 잔액이 부족하여 선물하기가 불가합니다 ❌ </Error> : null }
      </Text>
    </Container>
  );
}
