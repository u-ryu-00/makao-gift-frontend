import { useLocalStorage } from 'usehooks-ts';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useMallStore from '../hooks/useMallStore';

export default function SignupForm() {
  const [, setAccessToken] = useLocalStorage('accessToken', '');

  const mallStore = useMallStore();

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const {
      name, userId, password, confirmPassword,
    } = data;

    const accessToken = await mallStore.signup({
      name, userId, password, confirmPassword,
    });

    if (accessToken) {
      setAccessToken(accessToken);
    }

    if (mallStore.signupState === 'success') {
      navigate('/login');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>SIGN UP</h1>
      <div>
        <label htmlFor="input-account-name">
          이름:
        </label>
        <input
          id="input-account-name"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('name', { required: true })}
        />
      </div>
      <div>
        <label htmlFor="input-account-userId">
          아이디:
        </label>
        <input
          id="input-account-userId"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('userId', { required: true })}
        />
      </div>
      <div>
        <label htmlFor="input-account-password">
          비밀번호:
        </label>
        <input
          id="input-account-password"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('password', { required: true })}
        />
      </div>
      <div>
        <label htmlFor="input-account-confirmPassword">
          비밀번호 확인:
        </label>
        <input
          id="input-account-confirmPassword"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('confirmPassword', { required: true })}
        />
      </div>
      <button type="submit">
        회원가입
      </button>
    </form>
  );
}
