Feature('상품 주문 - 고객은 상품을 친구에게 보내기 위해 주문을 완료할 수 있다. ');

Scenario('내용을 미입력하여 선물하기 에러가 발생하는 경우', ({ I }) => {
  // Given
  I.amOnPage('/order');

  // When
  // '받는 분 성함'을 입력하지 않고 선물하기를 시도함.
  I.click('선물하기');

  // Then
  I.see('성함을 입력해주세요');
});

Scenario('선물하기에 성공한 경우', ({ I }) => {
  // Given
  I.amOnPage('/order');

  // When
  // 올바른 성함(필수), 주소(필수), 메시지(선택)를 입력 후 선물하기를 시도함.
  I.click('선물하기');

  // Then
  I.amOnPage('/orders');
  I.see('내가 주문한 내역입니다');
});
