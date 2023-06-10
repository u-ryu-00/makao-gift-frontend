import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useMallStore from '../hooks/useMallStore';
import numberFormat from '../utils/numberFormat';

export default function PresentForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const mallStore = useMallStore();

  const navigate = useNavigate();

  const {
    userId, quantity, productId, title, company, description, imageUrl,
  } = mallStore;

  const onSubmit = async (data) => {
    const { receiver, address, message } = data;

    await mallStore.requestPresent({
      userId,
      productId,
      title,
      company,
      description,
      imageUrl,
      quantity,
      receiver,
      address,
      message,
    });

    navigate('/orders');
  };

  return (
    <div>
      <h1>주문페이지</h1>
      <img src={mallStore.imageUrl} alt="상품 사진" style={{ width: '100px' }} />
      <h1>{mallStore.company}</h1>
      <h1>{mallStore.title}</h1>
      <h1>
        구매수량:
        {' '}
        {mallStore.quantity}
      </h1>
      <h1>
        총 상품금액:
        {' '}
        {numberFormat(mallStore.totalPrice)}
        원
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="receiver">받는 분 성함</label>
        <input
          id="receiver"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('receiver', { required: true })}
        />
        <h2>3~7자까지 한글만 사용 가능</h2>
        {errors.receiver ? (
          <p>성함을 입력해주세요</p>
        ) : null}
        <label htmlFor="address">받는 분 주소</label>
        <input
          id="address"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('address', { required: true })}
        />
        <h2>주소지를 입력해주세요</h2>
        {errors.address ? (
          <p>주소를 입력해주세요</p>
        ) : null}
        <label htmlFor="message">받는 분께 보내는 메시지</label>
        <input
          id="message"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('message', { required: false })}
        />
        <h2>100글자 이내로 입력해주세요</h2>
        <button
          type="submit"
        >
          선물하기
        </button>
      </form>
    </div>
  );
}
