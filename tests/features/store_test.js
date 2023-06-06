Feature('상품 목록 확인 - 고객은 상품 목록을 보고 마음에 드는 상품을 고를 수 있다.');

// Given
Before(({ I }) => {
  I.setupDatabase();
});

Scenario('상품이 있는 경우', ({ I }) => {
  // When
  I.amOnPage('/products');

  // Then
  I.see('인기선물을 한 자리에 모았어요');
  I.see('캔디 글레이즈 컬러밤');
});

Scenario('상품이 없는 경우', ({ I }) => {
  // Given
  I.deleteProduct();

  // When
  I.amOnPage('/products');

  // Then
  I.see('상품이 존재하지 않습니다');

  I.setupDatabase();
});
