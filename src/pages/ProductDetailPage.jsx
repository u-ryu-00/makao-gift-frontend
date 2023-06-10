import { useEffect } from 'react';
import Product from '../components/Product';
import useMallStore from '../hooks/useMallStore';

export default function ProductDetailPage() {
  const mallStore = useMallStore();

  mallStore.productId = window.location.pathname.split('/').pop();

  useEffect(() => {
    mallStore.fetchProduct(mallStore.productId);

    mallStore.resetQuantity();
  }, []);

  return (
    <Product />
  );
}
