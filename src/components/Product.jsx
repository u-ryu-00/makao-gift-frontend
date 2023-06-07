import { useState } from 'react';

import useMallStore from '../hooks/useMallStore';

import numberFormat from '../utils/numberFormat';

export default function Product() {
  const mallStore = useMallStore();

  const [isPresentButtonClicked, setIsPresentButtonClicked] = useState(false);

  const productId = window.location.pathname.split('/').pop();

  const minusButtonClick = () => {
    mallStore.minusQuantityAndTotalPrice();
  };

  const plusButtonClick = () => {
    mallStore.plusQuantityAndTotalPrice();
  };

  const presentButtonClick = () => {
    setIsPresentButtonClicked(true);
    if (mallStore.amount >= mallStore.totalPrice) {
      window.location.href = `/order/${productId}`;
    }
  };

  return (
    <div>
      <h1>{mallStore.title}</h1>
      <h1>
        {numberFormat(mallStore.price)}
        원
      </h1>
      <h2>
        제조사:
        {' '}
        {mallStore.company}
      </h2>
      <h2>구매수량</h2>
      <section>
        <button
          type="button"
          onClick={minusButtonClick}
          disabled={mallStore.quantity <= 1}
        >
          -
        </button>
        <p>{mallStore.quantity}</p>
        <button
          type="button"
          onClick={plusButtonClick}
        >
          +
        </button>
      </section>
      <h2>
        상품설명:
        {' '}
        {mallStore.description}
      </h2>
      <h2>
        총 상품금액:
        {' '}
        {mallStore.totalPrice}
      </h2>
      <button
        type="button"
        onClick={presentButtonClick}
      >
        선물하기
      </button>
      { isPresentButtonClicked && (mallStore.amount < mallStore.totalPrice)
        ? <p>❌ 잔액이 부족하여 선물하기가 불가합니다 ❌ </p> : null }
    </div>
  );
}
