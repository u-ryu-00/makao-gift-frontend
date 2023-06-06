import { useEffect } from 'react';
import Product from '../components/Product';
import useMallStore from '../hooks/useMallStore';

export default function ProductDetailPage() {
  const mallStore = useMallStore();

  const productId = window.location.pathname.split('/').pop();

  useEffect(() => {
    mallStore.fetchProduct(productId);
  }, []);

  return (
    <Product />
  );
}
