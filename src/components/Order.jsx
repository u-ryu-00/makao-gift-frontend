import styled from 'styled-components';

import useMallStore from '../hooks/useMallStore';

import dateTimeFormat from '../utils/dateTimeFormat';
import numberFormat from '../utils/numberFormat';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;

  h1 {
    color: #999999;
    font-weight: 400;
    font-size: 2rem;
    line-height: 5rem;
  }

  h2 {
    color: #444444;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
  }

  h3 {
    font-weight: 500;
    font-size: 16px;
    color: #666666;
    margin-right: 5rem;
  }

  h4 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.5rem;
    color: #666666;
  }
`;

const Bind = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Divider = styled.hr`
  background-color: #D9D9D9;
  height: 0.1rem ;
  width: 78rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export default function Order() {
  const mallStore = useMallStore();

  return (
    <Container>
      <img src={mallStore.imageUrl} alt={mallStore.title} style={{ width: '25rem', height: '25rem' }} />
      <h1>{mallStore.company}</h1>
      <h2>{mallStore.title}</h2>
      <Divider />
      <Bind>
        <h3>구매수량</h3>
        <h4>{mallStore.quantity}</h4>
      </Bind>
      <Divider />
      <Bind>
        <h3>총 상품금액</h3>
        <h4>
          {numberFormat(mallStore.totalPrice)}
          원
        </h4>
      </Bind>
      <Divider />
      <Bind>
        <h3>구매일</h3>
        <h4>{dateTimeFormat(mallStore.createdAt)}</h4>
      </Bind>
      <Divider />
      <Bind>
        <h3>받는 분</h3>
        <h4>{mallStore.receiver}</h4>
      </Bind>
      <Divider />
      <Bind>
        <h3>받는 분 주소</h3>
        <h4>{mallStore.address}</h4>
      </Bind>
      <Divider />
      <Bind>
        <h3>받는 분께 보내는 메시지</h3>
        <h4>{mallStore.message}</h4>
      </Bind>
      <Divider />
    </Container>
  );
}
