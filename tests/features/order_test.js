Feature('상품 주문 - 고객은 상품을 친구에게 보내기 위해 주문을 완료할 수 있다. ');

Before(({ I }) => {
  I.setupDatabase();

  I.login();

  I.deleteOrder();
});

Scenario('내용을 미입력하여 선물하기 에러가 발생하는 경우', ({ I }) => {
  // Given
  I.amOnPage('/');
  I.click('스토어');
  I.click('이솝');

  I.click('선물하기');

  // When
  // '받는 분 성함'을 입력하지 않고 선물하기를 시도함.
  I.fillField('받는 분 성함', '');
  I.fillField('받는 분 주소', '성동구');
  I.fillField('받는 분께 보내는 메시지', '감사합니다');

  I.click('선물하기');

  // Then
  I.see('성함을 입력해주세요');
});

Scenario('내용을 미입력하여 선물하기 에러가 발생하는 경우', ({ I }) => {
  // Given
  I.amOnPage('/');
  I.click('스토어');
  I.click('이솝');

  I.click('선물하기');

  // When
  // '받는 분 주소'를 입력하지 않고 선물하기를 시도함.
  I.fillField('receiver', '유정');
  I.fillField('address', '');
  I.fillField('message', '감사합니다');

  I.click('선물하기');

  // Then
  I.see('주소를 입력해주세요');
});

Scenario('내용을 미입력했지만 선물하기 에러가 발생하지 않는 경우', ({ I }) => {
  // Given
  I.amOnPage('/');
  I.click('스토어');
  I.click('이솝');

  I.click('선물하기');

  // When
  // '받는 분께 보내는 메시지'를 입력하지 않고 선물하기를 시도함.
  I.fillField('receiver', '유정');
  I.fillField('address', '성동구');
  I.fillField('message', '');

  I.click('선물하기');

  // Then
  I.amOnPage('/orders');
  I.see('내가 주문한 내역입니다');
  I.see('이솝');
});

Scenario('내용을 모두 올바르게 입력하여 선물하기에 성공한 경우', ({ I }) => {
  // Given
  I.amOnPage('/');
  I.click('스토어');
  I.click('이솝');

  I.click('선물하기');

  // When
  I.fillField('receiver', '유정');
  I.fillField('address', '성동구');
  I.fillField('message', '감사합니다');
  I.click('선물하기');

  // Then
  I.amOnPage('/orders');
  I.see('내가 주문한 내역입니다');
  I.see('이솝');
});
