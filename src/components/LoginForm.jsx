import { useLocalStorage } from 'usehooks-ts';

import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import styled from 'styled-components';
import useMallStore from '../hooks/useMallStore';
import Title from './ui/Title';
import Button from './ui/Button';
import ErrorText from './ui/ErrorText';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default function LoginForm() {
  const navigate = useNavigate();

  const mallStore = useMallStore();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [, setAccessToken] = useLocalStorage('accessToken', '');

  const onSubmit = async (data) => {
    const { userId, password } = data;
    const accessToken = await mallStore.login({ userId, password });
    if (accessToken) {
      setAccessToken(accessToken);
      navigate('/');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>USER LOGIN</Title>
        <hr />
        <div>
          <label htmlFor="input-userId" style={{ display: 'none' }}>
            아이디
          </label>
          <input
            id="input-userId"
            placeholder="아이디"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('userId', { required: true })}
          />
          {errors.userId ? (
            <ErrorText>아이디를 입력해주세요</ErrorText>
          ) : null}
        </div>
        <div>
          <label htmlFor="input-password" style={{ display: 'none' }}>
            비밀번호
          </label>
          <input
            id="input-password"
            placeholder="비밀번호"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register('password', { required: true })}
          />
          {errors.password ? (
            <ErrorText>비밀번호를 입력해주세요</ErrorText>
          ) : null}
          {mallStore.loginState === 'fail' ? (
            <ErrorText>아이디 혹은 비밀번호가 맞지 않습니다</ErrorText>
          ) : null}
        </div>
        <Button type="submit" onClick={() => {}}>
          로그인하기
        </Button>
        <li style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link to="/signup">회원가입</Link>
        </li>
      </form>
    </Container>
  );
}
