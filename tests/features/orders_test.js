Feature('주문 목록 확인 - 고객은 자신이 선물한 이력(주문 목록)을 확인할 수 있다.');

Scenario('로그인 전 주문조회 메뉴를 클릭하는 경우', ({ I }) => {
  // When
  I.amOnPage('/');
  I.click('주문조회');

  // Then
  I.amOnPage('/login');
});

Scenario('로그인 후 주문내역이 없는 경우', ({ I }) => {
  // Given
  I.setupDatabase();
  I.deleteOrder();
  I.login();

  // When
  I.amOnPage('/orders');

  // Then
  I.see('내가 주문한 내역이 없습니다');

  I.setupDatabase();
});

Scenario('로그인 후 주문내역이 여러 개 있는 경우', ({ I }) => {
  // Given
  I.setupDatabase();
  I.login();

  // When
  I.amOnPage('/orders');

  // Then
  I.see('내가 주문한 내역입니다');
});

Scenario('로그인 후 주문내역이 11개 있을 때 두번째 페이지를 클릭한 경우', ({ I }) => {
  // Given
  I.setupDatabase();
  I.addOrder();
  I.login();

  // When
  I.amOnPage('/orders');

  I.click('2');

  // Then
  I.see('내가 주문한 내역입니다');
  I.see('유정9');

  I.deleteOrder();
});
