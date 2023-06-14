import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Products from '../components/Products';

import useMallStore from '../hooks/useMallStore';
import Pagination from '../components/Pagination';

const Banner = styled.div`
  background : url('https://png.pngtree.com/thumb_back/fh260/background/20201010/pngtree-pastel-background-for-banner-image_407969.jpg');
  height: auto;
`;

const Text = styled.div`
  padding: 1rem;
  margin-left: 30rem;
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 2.4rem;
  margin-bottom: 2rem;
  line-height: 3.5rem;
`;

const H2 = styled.h2`
  font-weight: 700;
  font-size: 1.6rem;
  color: #FCBE2C; 
  margin-bottom: 2rem;
`;

const H3 = styled.h3`
  font-weight: 400;
  font-size: 1.6rem;
`;

export default function StorePage() {
  const mallStore = useMallStore();

  const navigate = useNavigate();

  const [page, setPage] = useState('');

  useEffect(() => {
    mallStore.fetchProducts(page);
  }, [page]);

  const { totalPages } = mallStore;

  const moveToPage = (clickedPage) => {
    navigate(`?page=${clickedPage}`);
  };

  return (
    <div>
      <Banner>
        <Text>
          <H2>평범한 선물은 주기도 민망하다구요?</H2>
          <H1>
            작정하고 준비한
            <br />
            마카오톡 선물하기 아이템
          </H1>
          <H3>마카오톡 선물하기에서만 볼 수 있는 특별템 기획전</H3>
        </Text>
      </Banner>
      <H3>인기선물을 한 자리에 모았어요</H3>
      <Products />
      <Pagination
        totalPages={totalPages}
        onClick={moveToPage}
        setPage={setPage}
      />
    </div>
  );
}
