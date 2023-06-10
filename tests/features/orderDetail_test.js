Feature('주문 세부 정보 확인 - 고객은 자신이 선물한 상품과 메시지(주문 세부 정보)를 자세히 확인할 수 있다.');

Scenario('주문 세부 정보를 보려는 경우', ({ I }) => {
  I.setupDatabase();

  // When
  I.amOnPage('/orders/1');

  // Then
  I.see('총 상품금액');
  I.see('2000');
  I.see('받는 분');
  I.see('유정');
  I.see('받는 분 주소');
  I.see('성동구');
});
