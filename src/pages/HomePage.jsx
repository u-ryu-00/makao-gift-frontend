import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center; /* Align children vertically in the center */
  justify-content: center; /* Create equal spacing between children */

  img {
    width: 40rem;
    height: 40rem;
    margin-left: 20rem;
  }
`;

const Text = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  flex-direction: column;
  justify-content: center;
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 3.6rem;
  margin-bottom: 2rem;
  line-height: 4.5rem;
`;

const H2 = styled.h2`
  font-weight: 700;
  font-size: 2.4rem;
  color: #FCBE2C; 
  margin-bottom: 2rem;
`;

const H3 = styled.h3`
  font-weight: 700;
  font-size: 1.6rem;
`;

export default function HomePage() {
  return (
    <Container>
      <Text>
        <H2>무얼 선물할 지 고민이라면</H2>
        <H1>
          특별한
          <br />
          아이템을 전하세요
        </H1>
        <H3>마카오 선물하기에서만 볼 수 있는 특별한 아이템</H3>
      </Text>
      <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqcsVd%2FbtqDPLL3kFc%2FSgChwtuWkVCpAIPmVj7MRk%2Fimg.jpg" alt="상품 사진" />
    </Container>
  );
}
