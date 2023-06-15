import { Link } from 'react-router-dom';

import styled from 'styled-components';

import useMallStore from '../hooks/useMallStore';

const Container = styled.div`
  display: flex;
  justify-content: center;
  display: grid;
  grid-template-columns: 30rem 30rem 30rem 30rem;
  column-gap: 0;
  padding: 1rem;
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 2.4rem;
  margin-bottom: 2rem;
  line-height: 3.5rem;
  margin-top: 5rem;
  margin-left: 30rem;
`;

const H1Custom = styled(H1)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default function Orders() {
  const mallStore = useMallStore();

  const { orders } = mallStore;

  return (
    <div>
      {(!orders.length) ? (
        <H1Custom>내가 주문한 내역이 없습니다</H1Custom>
      )
        : <H1>내가 주문한 내역입니다</H1>}
      <Container>
        {orders.map((order) => (
          <Link style={{ width: '28rem' }} to={`/orders/${order.orderId}`} key={order.orderId}>
            <img src={order.imageUrl} alt={order.title} style={{ width: '28rem', height: '28rem' }} />
            <h1 style={{ width: '28rem' }}>{`company: ${order.company}`}</h1>
            <h1 style={{ width: '28rem', overflowWrap: 'break-word' }}>{`title: ${order.title}`}</h1>
            <h1 style={{ width: '28rem' }}>{`To. ${order.receiver}`}</h1>
          </Link>
        ))}
      </Container>
    </div>
  );
}
