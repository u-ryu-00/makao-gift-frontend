import { Link } from 'react-router-dom';

import styled from 'styled-components';

import useMallStore from '../hooks/useMallStore';

import numberFormat from '../utils/numberFormat';

const Container = styled.div`
  display: flex;
  justify-content: center;

  display: grid;

  grid-template-columns: 30rem 30rem 30rem 30rem;
  column-gap: 0;
  padding: 1rem;
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 2.4rem;
  margin-bottom: 2rem;
  line-height: 3.5rem;
  margin-top: 5rem;
  margin-left: 30rem;
`;

const H1Custom = styled(H1)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default function Products() {
  const mallStore = useMallStore();

  const { products } = mallStore;

  return (
    <div>
      {(!products.length) ? (
        <H1Custom>상품이 존재하지 않습니다</H1Custom>
      )
        : <H1>인기선물을 한 자리에 모았어요</H1>}
      <Container>

        {products.map((product) => (
          <Link style={{ width: '28rem' }} to={`/products/${product.id}`} key={product.id}>
            <img src={product.imageUrl} alt="상품 사진" style={{ width: '28rem', height: '28rem' }} />
            <h1 style={{ width: '28rem' }}>{product.company}</h1>
            <h1 style={{ width: '28rem', overflowWrap: 'break-word' }}>{product.title}</h1>
            <h1 style={{ width: '28rem' }}>
              {numberFormat(product.price)}
              원
            </h1>
          </Link>
        ))}
      </Container>
    </div>
  );
}
