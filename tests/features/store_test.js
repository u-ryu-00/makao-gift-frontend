Feature('상품 목록 확인 - 고객은 상품 목록을 보고 마음에 드는 상품을 고를 수 있다.');

Scenario('상품이 있는 경우', ({ I }) => {
  // When
  I.amOnPage('/products');

  // Then
  I.see('인기 선물을 한 자리에 모았어요');
});

Scenario('상품이 없는 경우', ({ I }) => {
  // When
  I.amOnPage('/products');

  // Then
  I.see('상품이 존재하지 않습니다');
});
