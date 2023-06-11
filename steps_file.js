/* global actor */

const backdoorBaseUrl = 'http://localhost:8000/backdoor';

module.exports = () => actor({
  setupDatabase() {
    this.amOnPage(`${backdoorBaseUrl}/setup-database`);
    this.waitForText('OK');
  },

  deleteProduct() {
    this.amOnPage(`${backdoorBaseUrl}/delete-product`);
    this.waitForText('OK');
  },

  deleteOrder() {
    this.amOnPage(`${backdoorBaseUrl}/delete-order`);
    this.waitForText('OK');
  },

  login(userId) {
    this.amOnPage('/login');

    this.fillField('아이디', userId);
    this.fillField('비밀번호', 'Aa1!!!!!');

    this.click('[type=submit]');

    this.wait(2);

    this.waitForText('로그아웃');
  },
});
