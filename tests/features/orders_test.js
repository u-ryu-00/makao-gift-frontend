Feature('주문 목록 확인 - 고객은 자신이 선물한 이력(주문 목록)을 확인할 수 있다.');

Scenario('로그인 후 주문내역이 없는 경우', ({ I }) => {
  // Given
  // 로그인 함.

  // When
  I.amOnPage('/orders');

  // Then
  I.see('내가 주문한 내역입니다');
});

Scenario('로그인 후 주문내역이 여러 개 있는 경우', ({ I }) => {
  // Given
  // 로그인 함.

  // When
  I.amOnPage('/orders');

  // Then
  I.see('내가 주문한 내역입니다');
});

Scenario('로그인 전 주문내역을 보려는 경우', ({ I }) => {
  // When
  I.amOnPage('/orders');

  // Then
  I.amOnPage('/login');
});
