import { apiService } from '../services/ApiService';

export default class MallStore {
  constructor() {
    this.listeners = new Set();

    this.userId = '';
    this.amount = 0;
  }

  subscribe(listener) {
    this.listeners.add(listener);
  }

  unsubscribe(listner) {
    this.listeners.delete(listner);
  }

  publish() {
    this.listeners.forEach((listener) => listener());
  }

  async login({ userId, password }) {
    try {
      const { accessToken, amount } = await apiService.postSession({
        userId, password,
      });

      this.amount = amount;

      return accessToken;
    } catch (e) {
      return '';
    }
  }

  async fetchAccount() {
    const { userId, amount } = await apiService.fetchAccount();

    this.userId = userId;
    this.amount = amount;

    this.publish();
  }
}
export const mallStore = new MallStore();
