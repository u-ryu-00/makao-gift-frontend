import useMallStore from '../hooks/useMallStore';

import numberFormat from '../utils/numberFormat';

export default function Product() {
  const mallStore = useMallStore();

  return (
    <div>
      <img src={mallStore.imageUrl} alt="상품 사진" style={{ width: '100px' }} />
      <h1>{mallStore.title}</h1>
      <h1>
        {numberFormat(mallStore.price)}
        원
      </h1>
      <h2>
        제조사 :
        {' '}
        {mallStore.company}
      </h2>
      <h2>
        상품설명:
        {' '}
        {mallStore.description}
      </h2>
      <button type="button">
        선물하기
      </button>
    </div>
  );
}
