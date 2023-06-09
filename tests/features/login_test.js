Feature('로그인 - 고객은 자신임을 증명하기 위해 로그인을 할 수 있다. ');

// Given
Before(({ I }) => {
  I.setupDatabase();
});

Scenario('로그인을 하러 로그인 화면에 접속한 경우', ({ I }) => {
  // When
  I.amOnPage('/login');

  // Then
  I.see('USER LOGIN');
});

Scenario('잘못된 아이디를 입력한 경우', ({ I }) => {
  // Given
  I.amOnPage('/login');

  // When
  // 잘못된 아이디로 로그인을 시도함.
  I.fillField('아이디', 'xxx');
  I.fillField('비밀번호', 'Aa1!!!!!');

  I.click('[type=submit]');

  // Then
  I.see('아이디 혹은 비밀번호가 맞지 않습니다');
});

Scenario('잘못된 비밀번호를 입력한 경우', ({ I }) => {
  // Given
  I.amOnPage('/login');

  // When
  // 잘못된 비밀번호로 로그인을 시도함.
  I.fillField('아이디', 'a111');
  I.fillField('비밀번호', 'xxx');

  I.click('[type=submit]');

  // Then
  I.see('아이디 혹은 비밀번호가 맞지 않습니다');
});

Scenario('내용(아이디)을 미입력하여 로그인 에러가 발생하는 경우', ({ I }) => {
  // Given
  I.amOnPage('/login');

  // When
  // 아이디를 입력하지 않고 로그인을 시도함.
  I.fillField('아이디', '');
  I.fillField('비밀번호', 'Aa1!!!!!');

  I.click('[type=submit]');

  // Then
  I.see('아이디를 입력해주세요');
});

Scenario('내용(비밀번호)을 미입력하여 로그인 에러가 발생하는 경우', ({ I }) => {
  // Given
  I.amOnPage('/login');

  // When
  // 비밀번호를 입력하지 않고 로그인을 시도함.
  I.fillField('아이디', 'a111');
  I.fillField('비밀번호', '');

  I.click('[type=submit]');

  // Then
  I.see('비밀번호를 입력해주세요');
});

Scenario('로그인에 성공한 경우', ({ I }) => {
  // Given
  I.amOnPage('/login');

  // When
  // 올바른 아이디, 비밀번호를 모두 입력 후 로그인을 시도함.
  I.fillField('아이디', 'a111');
  I.fillField('비밀번호', 'Aa1!!!!!');

  I.click('[type=submit]');

  // Then
  I.amOnPage('/');
});
