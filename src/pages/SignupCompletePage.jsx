import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import Button from '../components/ui/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 4rem;
  margin-bottom: 2rem;
  line-height: 6rem;
`;

const H2 = styled.h2`
  font-weight: 400;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export default function SignupCompletePage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <Container>
      <H1>회원가입 완료</H1>
      <H2>마카오 선물하기 회원가입이 완료되었습니다.</H2>
      <H2>정상적인 서비스 이용을 위해 로그인을 진행해주세요.</H2>
      <Button type="button" onClick={handleLogin}>로그인하기</Button>
    </Container>
  );
}
