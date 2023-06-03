Feature('주문 세부 정보 확인 - 고객은 자신이 선물한 상품과 메시지(주문 세부 정보)를 자세히 확인할 수 있다.');

Scenario('주문 세부 정보를 보려는 경우', ({ I }) => {
  // Given
  I.amOnPage('/orders');
  // 구매 내역 상품을 누름.

  // When
  I.amOnPage('/orders/{id}');

  // Then
  I.see('총 상품금액');
});
