import { apiService } from '../services/ApiService';

export default class MallStore {
  constructor() {
    this.listeners = new Set();

    this.userId = 0;
    this.amount = 0;

    this.products = [];

    this.title = '';
    this.company = '';
    this.price = 0;
    this.description = '';
    this.imageUrl = '';

    this.quantity = 1;
    this.totalPrice = 0;
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

  async fetchProducts() {
    this.products = await apiService.fetchProducts();
    this.publish();
  }

  async fetchProduct(id) {
    const {
      title, company, price, description, imageUrl,
    } = await apiService.fetchProduct(id);

    this.title = title;
    this.company = company;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this.quantity = 1; // 수량 초기화

    this.calculateTotalPrice(); // 총 상품금액 계산

    this.publish();
  }

  calculateTotalPrice() {
    this.totalPrice = this.price * this.quantity;
    this.publish();
  }

  plusQuantityAndTotalPrice() {
    this.quantity += 1;
    this.totalPrice += this.price;

    this.publish();
  }

  minusQuantityAndTotalPrice() {
    this.quantity -= 1;
    this.totalPrice -= this.price;

    this.publish();
  }
}
export const mallStore = new MallStore();
