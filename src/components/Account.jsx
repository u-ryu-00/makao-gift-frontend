import styled from 'styled-components';

import useMallStore from '../hooks/useMallStore';

import numberFormat from '../utils/numberFormat';

const Amount = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
`;

export default function Account() {
  const mallStore = useMallStore();

  return (
    <Amount>
      내 잔액:
      {' '}
      {numberFormat(mallStore.amount)}
      원
    </Amount>
  );
}
