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
});
