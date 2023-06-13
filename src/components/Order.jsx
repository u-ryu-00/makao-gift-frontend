import useMallStore from '../hooks/useMallStore';
import dateTimeFormat from '../utils/dateTimeFormat';
import numberFormat from '../utils/numberFormat';

export default function Order() {
  const mallStore = useMallStore();

  return (
    <div>
      <img src={mallStore.imageUrl} alt={mallStore.title} style={{ width: '100px' }} />
      <h2>{`company: ${mallStore.company}`}</h2>
      <h2>{`title: ${mallStore.title}`}</h2>
      <h2>{`구매수량: ${mallStore.quantity}`}</h2>
      <h2>{`총 상품금액: ${numberFormat(mallStore.totalPrice)}원`}</h2>
      <h2>{`구매일: ${dateTimeFormat(mallStore.createdAt)}`}</h2>
      <h2>{`받는 분: ${mallStore.receiver}`}</h2>
      <h2>{`받는 분 주소: ${mallStore.address}`}</h2>
      <h2>{`받는 분께 보내는 메세지: ${mallStore.message}`}</h2>
    </div>
  );
}
