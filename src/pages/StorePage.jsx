import { useEffect } from 'react';

import Products from '../components/Products';

import useMallStore from '../hooks/useMallStore';

export default function StorePage() {
  const mallStore = useMallStore();

  useEffect(() => {
    mallStore.fetchProducts();
  }, []);

  return (
    <div>
      <p>평범한 선물은 주기도 민망하다구요?</p>
      <p>
        작정하고 준비한
        <br />
        마카오톡 선물하기 아이템
      </p>
      <p>마카오톡 선물하기에서만 볼 수 있는 특별템 기획전</p>
      <p>인기선물을 한 자리에 모았어요</p>
      <Products />
    </div>
  );
}
