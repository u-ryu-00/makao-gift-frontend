import { useLocalStorage } from 'usehooks-ts';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useMallStore from '../hooks/useMallStore';

export default function SignupForm() {
  const [isSignupButtonClicked, setIsSignupButtonClicked] = useState(false);

  const [, setAccessToken] = useLocalStorage('accessToken', '');

  const mallStore = useMallStore();

  const { register, handleSubmit, formState: { errors } } = useForm();

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
      navigate('/signupComplete');
    }
  };

  const { errorMessage } = mallStore;

  const handleSignupButtonClick = () => {
    setIsSignupButtonClicked(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>SIGN UP</h1>
      <hr />
      <div>
        <label htmlFor="input-account-name">
          이름:
        </label>
        <br />
        <input
          id="input-account-name"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('name', { required: true })}
        />
        <br />
        {(isSignupButtonClicked && mallStore.isSignupFail) || errors.name ? null : (
          <p>3~7자까지 한글만 사용 가능</p>
        )}
        {errors.name ? (
          <p>이름을 입력해주세요</p>
        ) : null}
        {mallStore.isSignupFail && errorMessage === '이름을 다시 확인해주세요' ? <p>{mallStore.errorMessage}</p> : null}
      </div>
      <div>
        <label htmlFor="input-account-userId">
          아이디:
        </label>
        <br />
        <input
          id="input-account-userId"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('userId', { required: true })}
        />
        <br />
        {(isSignupButtonClicked && mallStore.isSignupFail) || errors.userId ? null : (
          <p>영문소문자/숫자,4~16자만 사용 가능</p>
        )}
        {errors.userId ? (
          <p>아이디를 입력해주세요</p>
        ) : null}
        {mallStore.isSignupFail && errorMessage === '아이디를 다시 확인해주세요' ? <p>{mallStore.errorMessage}</p> : null}
        {mallStore.isSignupFail && errorMessage === '해당 아이디는 사용할 수 없습니다' ? <p>{mallStore.errorMessage}</p> : null}
      </div>
      <div>
        <label htmlFor="input-account-password">
          비밀번호:
        </label>
        <br />
        <input
          id="input-account-password"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('password', { required: true })}
        />
        <br />
        {(isSignupButtonClicked && mallStore.isSignupFail) || errors.password ? null : (
          <p>8글자 이상의 영문(대소문자), 숫자, 특수문자가 모두 포함되어야 함</p>
        )}
        {errors.password ? (
          <p>비밀번호를 입력해주세요</p>
        ) : null}
        {mallStore.isSignupFail && errorMessage === '비밀번호를 다시 확인해주세요' ? <p>{mallStore.errorMessage}</p> : null}
      </div>
      <div>
        <label htmlFor="input-account-confirmPassword">
          비밀번호 확인:
        </label>
        <br />
        <input
          id="input-account-confirmPassword"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('confirmPassword', { required: true })}
        />
        <br />
        {errors.confirmPassword ? (
          <p>비밀번호를 입력해주세요</p>
        ) : null}
        {mallStore.isSignupFail && errorMessage === '비밀번호가 일치하지 않습니다' ? <p>{mallStore.errorMessage}</p> : null}
      </div>
      <button type="submit" onClick={handleSignupButtonClick}>
        회원가입
      </button>
    </form>
  );
}
