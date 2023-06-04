/* global actor */

const backdoorBaseUrl = 'http://localhost:8000/backdoor';

module.exports = () => actor({
  setupDatebase() {
    this.amOnPage(`${backdoorBaseUrl}/setup-database`);
  },
});
