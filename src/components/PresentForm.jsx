import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useMallStore from '../hooks/useMallStore';
import numberFormat from '../utils/numberFormat';
import Button from './ui/Button';
import ErrorText from './ui/ErrorText';
import GuideText from './ui/GuideText';

const Information = styled.div`
  display: flex;
  column-gap: 5rem;
  margin-bottom: 5rem;
`;

const Container = styled.div`
  border: 1px solid #D9D9D9;

  padding: 6rem;
  margin: 4rem;

  h1 {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 3rem;
  }
`;

const Text = styled.div`
 
`;

const PresentInput = styled.input`
  width: 90rem;
`;

const PresentButton = styled(Button)`
  width: 90rem;
`;

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
    <Container>
      <Information>
        <img src={mallStore.imageUrl} alt="상품 사진" style={{ width: '15rem', height: '15rem' }} />
        <Text>
          <h1>{mallStore.company}</h1>
          <h1>{mallStore.title}</h1>
          <br />
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
        </Text>
      </Information>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="receiver">받는 분 성함*</label>
        <br />
        <PresentInput
          id="receiver"
          maxLength={7}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('receiver', { required: true })}
        />
        {errors.receiver ? (
          <ErrorText>성함을 입력해주세요</ErrorText>
        ) : <GuideText>3~7자까지 한글만 사용 가능</GuideText>}
        <label htmlFor="address">받는 분 주소*</label>
        <br />
        <PresentInput
          id="address"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('address', { required: true })}
        />
        {errors.address ? (
          <ErrorText>주소를 입력해주세요</ErrorText>
        ) : <GuideText>주소지를 입력해주세요</GuideText>}
        <label htmlFor="message">받는 분께 보내는 메시지</label>
        <br />
        <PresentInput
          id="message"
          maxLength={100}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('message', { required: false })}
        />
        <GuideText>100글자 이내로 입력해주세요</GuideText>
        <PresentButton
          type="submit"
        >
          선물하기
        </PresentButton>
      </form>
    </Container>
  );
}
