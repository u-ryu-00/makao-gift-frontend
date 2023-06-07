import { useEffect } from 'react';
import Order from '../components/Order';
import useMallStore from '../hooks/useMallStore';

export default function OrderPage() {
  const mallStore = useMallStore();

  const productId = window.location.pathname.split('/').pop();

  useEffect(() => {
    mallStore.fetchProduct(productId);
  }, []);

  useEffect(() => {
    mallStore.calculateTotalPrice(); // Recalculate the total price when the quantity changes
  }, [mallStore.quantity]);

  return <Order quantity={mallStore.quantity} totalPrice={mallStore.totalPrice} />;
}
