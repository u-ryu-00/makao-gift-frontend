Feature('상품 세부 정보 확인 - 고객은 상품을 구매하기 위해 상품의 세부 정보를 확인할 수 있다.');

// Given
Before(({ I }) => {
  I.setupDatabase();
});

Scenario('로그인 전 상세 페이지를 방문한 경우 ', ({ I }) => {
  // When
  I.amOnPage('/products/1');

  // Then
  I.see('제조사');
  I.see('입생로랑');
  I.see('1,000원');
  I.see('선물하기');
});

Scenario('로그인 후 상세 페이지를 방문한 경우 ', ({ I }) => {
  // Given
  I.login();

  // When
  I.amOnPage('/products/1');

  // Then
  I.see('제조사');
  I.see('입생로랑');
  I.see('1,000원');
  I.see('선물하기');
});

Feature('상품 선택 - 고객은 원하는 상품과 개수를 선택하고 선물을 주문할 수 있다.');

Scenario('로그인 전 선물하기를 진행할 경우', ({ I }) => {
  // Given
  I.amOnPage('/products/1');

  // When
  I.click('선물하기');

  // Then
  I.amOnPage('/login');
  I.see('USER LOGIN');

  I.login();

  I.amOnPage('/products/1');
});

Scenario('로그인 후 잔액이 모자란 채 선물하기를 진행할 경우', ({ I }) => {
  // Given
  I.login();

  I.amOnPage('/products/100');

  // When
  I.click('선물하기');

  // Then
  I.see('❌ 잔액이 부족하여 선물하기가 불가합니다 ❌');
});

Scenario('로그인 후 잔액이 충분할 때 선물하기를 진행할 경우', ({ I }) => {
  // Given
  I.login();

  I.amOnPage('/products/1');

  // When
  I.click('선물하기');

  // Then
  I.amOnPage('/order');
  I.see('받는 분 성함');
});
