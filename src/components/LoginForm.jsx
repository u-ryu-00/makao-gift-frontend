import { useLocalStorage } from 'usehooks-ts';

import { Link, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import useMallStore from '../hooks/useMallStore';

export default function LoginForm() {
  const navigate = useNavigate();

  const mallStore = useMallStore();

  const { register, handleSubmit } = useForm();

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>USER LOGIN</h1>
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
      </div>
      <button type="submit" onClick={() => {}}>
        로그인하기
      </button>
      <Link to="/register">회원가입</Link>
    </form>
  );
}
