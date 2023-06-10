import { useEffect } from 'react';

import useMallStore from '../hooks/useMallStore';

import Orders from '../components/Orders';

export default function OrdersPage() {
  const mallStore = useMallStore();

  useEffect(() => {
    mallStore.fetchOrders();

    mallStore.fetchAccount();
  }, []);

  return (
    <Orders />
  );
}
