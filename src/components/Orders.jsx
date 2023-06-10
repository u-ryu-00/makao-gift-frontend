import { Link } from 'react-router-dom';

import useMallStore from '../hooks/useMallStore';

export default function Orders() {
  const mallStore = useMallStore();

  const { orders } = mallStore;

  return (
    <div>
      {(orders && orders.length !== 0) ? (
        <div>
          <p>내가 주문한 내역입니다!!!!!!!</p>
          <hr />
          {orders.map((order) => (
            <Link to={`/orders/${order.orderId}`} key={order.orderId}>
              <img src={order.imageUrl} alt={order.title} style={{ width: '100px' }} />
              <h1>{`company: ${order.company}`}</h1>
              <h1>{`title: ${order.title}`}</h1>
              <h1>{`To. ${order.receiver}`}</h1>
              <hr />
            </Link>
          ))}
        </div>
      ) : (
        <p>내가 주문한 내역이 없습니다</p>
      )}
    </div>
  );
}
