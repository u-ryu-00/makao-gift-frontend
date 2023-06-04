import useMallStore from '../hooks/useMallStore';

import numberFormat from '../utils/numberFormat';

export default function Account() {
  const mallStore = useMallStore();

  return (
    <p>
      내 잔액:
      {' '}
      {numberFormat(mallStore.amount)}
      원
    </p>
  );
}
