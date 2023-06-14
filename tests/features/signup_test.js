Feature('회원 가입 - 고객은 상품을 주문할 수 있는 자격을 얻기 위해 회원가입을 할 수 있다. ');

// Given
Before(({ I }) => {
  I.setupDatabase();
});

Scenario('회원가입을 하러 회원가입 화면에 접속한 경우', ({ I }) => {
  // When
  I.amOnPage('/signup');

  // Then
  I.see('SIGN UP');
});

Scenario('아이디가 중복되어 회원가입 진행이 불가능한 경우', ({ I }) => {
  // Given
  I.amOnPage('/signup');

  // When
  I.fillField('이름:', '내이름');
  I.fillField('아이디:', 'a111');
  I.fillField('비밀번호:', 'Aa1!!!!!');
  I.fillField('비밀번호 확인:', 'Aa1!!!!!');

  I.click('[type=submit]');

  // Then
  I.see('해당 아이디는 사용할 수 없습니다');
});

Scenario('이름을 잘못 입력하여 회원가입 에러가 발생하는 경우', ({ I }) => {
  // Given
  I.amOnPage('/signup');

  // When
  // ‘3~7자까지 한글만 사용 가능’ 조건을 지키지 않은 이름으로 회원가입을 시도함.
  I.fillField('이름:', 'a');
  I.fillField('아이디:', 'a222');
  I.fillField('비밀번호:', 'Aa1!!!!!');
  I.fillField('비밀번호 확인:', 'Aa1!!!!!');

  I.click('[type=submit]');

  // Then
  I.see('이름을 다시 확인해주세요');
});

Scenario('아이디를 잘못 입력하여 회원가입 에러가 발생하는 경우', ({ I }) => {
  // Given
  I.amOnPage('/signup');

  // When
  // ‘영문 소문자 / 숫자, 4~16자만 사용 가능' 조건을 지키지 않은 아이디로 회원가입을 시도함.
  I.fillField('이름:', '내이름');
  I.fillField('아이디:', 'a22');
  I.fillField('비밀번호:', 'Aa1!!!!!');
  I.fillField('비밀번호 확인:', 'Aa1!!!!!');

  I.click('[type=submit]');

  // Then
  I.see('아이디를 다시 확인해주세요');
});

Scenario('비밀번호를 잘못 입력하여 회원가입 에러가 발생하는 경우', ({ I }) => {
  // Given
  I.amOnPage('/signup');

  // When
  // ‘8글자 이상의 영문(대소문자), 숫자, 특수문자가 모두 포함되어야 함’ 조건을 지키지 않은 비밀번호로 회원가입을 시도함.
  I.fillField('이름:', '내이름');
  I.fillField('아이디:', 'a222');
  I.fillField('비밀번호:', 'A1!!!!!');
  I.fillField('비밀번호 확인:', 'Aa1!!!!!');

  I.click('[type=submit]');

  // Then
  I.see('비밀번호를 다시 확인해주세요');
});

Scenario('비밀번호 확인에 입력한 문자가 비밀번호로 설정한 문자와 달라서 회원가입 에러가 발생하는 경우', ({ I }) => {
  // Given
  I.amOnPage('/signup');

  // When
  // 비밀번호 확인에 입력한 문자가 비밀번호로 설정한 문자와 다름.
  I.fillField('이름:', '내이름');
  I.fillField('아이디:', 'a222');
  I.fillField('비밀번호:', 'Aa1!!!!!');
  I.fillField('비밀번호 확인:', 'Aa!!!!!');

  I.click('[type=submit]');

  // Then
  I.see('비밀번호가 일치하지 않습니다');
});

Scenario('내용(이름)을 미입력하여 회원가입 에러가 발생하는 경우', ({ I }) => {
  // Given
  I.amOnPage('/signup');

  // When
  // 이름을 입력하지 않고 회원가입을 시도함.
  I.fillField('이름:', '');
  I.fillField('아이디:', 'a222');
  I.fillField('비밀번호:', 'Aa1!!!!!');
  I.fillField('비밀번호 확인:', 'Aa1!!!!!');

  I.click('[type=submit]');

  // Then
  I.see('이름을 입력해주세요');
});

Scenario('내용(아이디)을 미입력하여 회원가입 에러가 발생하는 경우', ({ I }) => {
  // Given
  I.amOnPage('/signup');

  // When
  // 아이디를 입력하지 않고 회원가입을 시도함.
  I.fillField('이름:', '내이름');
  I.fillField('아이디:', '');
  I.fillField('비밀번호:', 'Aa1!!!!!');
  I.fillField('비밀번호 확인:', 'Aa1!!!!!');

  I.click('[type=submit]');

  // Then
  I.see('아이디를 입력해주세요');
});

Scenario('내용(비밀번호)을 미입력하여 회원가입 에러가 발생하는 경우', ({ I }) => {
  // Given
  I.amOnPage('/signup');

  // When
  // 비밀번호를 입력하지 않고 회원가입을 시도함.
  I.fillField('이름:', '내이름');
  I.fillField('아이디:', 'a222');
  I.fillField('비밀번호:', '');
  I.fillField('비밀번호 확인:', 'Aa1!!!!!');

  I.click('[type=submit]');

  // Then
  I.see('비밀번호를 입력해주세요');
});

Scenario('내용(비밀번호 확인)을 미입력하여 회원가입 에러가 발생하는 경우', ({ I }) => {
  // Given
  I.amOnPage('/signup');

  // When
  // 비밀번호 확인을 입력하지 않고 회원가입을 시도함.
  I.fillField('이름:', '내이름');
  I.fillField('아이디:', 'a222');
  I.fillField('비밀번호:', 'Aa1!!!!!');
  I.fillField('비밀번호 확인:', '');

  I.click('[type=submit]');

  // Then
  I.see('비밀번호를 입력해주세요');
});

Scenario('회원가입에 성공한 경우', ({ I }) => {
  // Given
  I.amOnPage('/signup');

  // When
  // 조건에 맞는 이름과 아이디, 비밀번호(+비밀번호 확인)를 모두 입력 후 회원가입을 시도함.
  I.fillField('이름', '내이름');
  I.fillField('아이디', 'a222');
  I.fillField('비밀번호', 'Aa1!!!!!');
  I.fillField('비밀번호 확인', 'Aa1!!!!!');

  I.click('[type=submit]');

  I.amOnPage('/signupComplete');

  // Then
  I.see('회원가입 완료');
  I.see('마카오 선물하기 회원가입이 완료되었습니다.');
  I.see('로그인하기');
});
