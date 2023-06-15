import { useEffect } from 'react';

import useMallStore from '../hooks/useMallStore';

import Order from '../components/Order';

export default function OrderDetailPage() {
  const mallStore = useMallStore();

  mallStore.orderId = window.location.pathname.split('/').pop();

  useEffect(() => {
    mallStore.fetchOrder(mallStore.orderId);
  }, []);

  return (
    <Order />
  );
}
