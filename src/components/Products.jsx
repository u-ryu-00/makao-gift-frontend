import { Link } from 'react-router-dom';

import useMallStore from '../hooks/useMallStore';

import numberFormat from '../utils/numberFormat';

export default function Products() {
  const mallStore = useMallStore();

  const { products } = mallStore;

  return (
    <div>
      {(!products.length) ? (
        <p>상품이 존재하지 않습니다</p>
      )
        : null}
      {products.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id}>
          <img src={product.imageUrl} alt="상품 사진" style={{ width: '100px' }} />
          <h1>{product.company}</h1>
          <h1>{product.title}</h1>
          <h1>
            {numberFormat(product.price)}
            원
          </h1>
        </Link>
      ))}
    </div>

  );
}
