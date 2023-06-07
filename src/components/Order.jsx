import useMallStore from '../hooks/useMallStore';

import numberFormat from '../utils/numberFormat';

export default function Order({ quantity, totalPrice }) {
  const mallStore = useMallStore();

  return (
    <div>
      <h1>주문페이지</h1>
      <h1>{quantity}</h1>
      <h1>{mallStore.title}</h1>
      <h1>
        {numberFormat(totalPrice)}
        원
      </h1>
      <h2>
        {mallStore.company}
      </h2>
      <h2>
        상품설명:
        {' '}
        {mallStore.description}
      </h2>
      <h2>
        총 상품금액:
        {' '}
        {numberFormat(totalPrice)}
      </h2>
      <button
        type="button"
      >
        선물하기
      </button>
    </div>
  );
}
