Feature('주문 세부 정보 확인 - 고객은 자신이 선물한 상품과 메시지(주문 세부 정보)를 자세히 확인할 수 있다.');

Scenario('로그인 후 주문 세부 정보를 보려는 경우', ({ I }) => {
  I.setupDatabase();

  I.login();
  I.amOnPage('/');
  I.click('주문조회');

  I.see('내가 주문한 내역입니다');

  I.click('캔디 글레이즈 컬러밤');

  // Then
  I.see('총 상품금액');
  I.see('2,000원');
  I.see('받는 분');
  I.see('유정');
  I.see('받는 분 주소');
  I.see('성동구');
});
