import { apiService } from '../services/ApiService';

export default class MallStore {
  constructor() {
    this.listeners = new Set();

    this.userId = 0;
    this.name = '';
    this.amount = 0;

    this.products = [];
    this.product = {};

    this.productId = 0;
    this.title = '';
    this.company = '';
    this.price = 0;
    this.description = '';
    this.imageUrl = '';

    this.quantity = 1;
    this.totalPrice = 0;

    this.orderId = 0;

    this.orders = [];
    this.order = {};

    this.createdAt = '';
  }

  subscribe(listener) {
    this.listeners.add(listener);
  }

  unsubscribe(listener) {
    this.listeners.delete(listener);
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
      productId, title, company, price, description, imageUrl,
    } = await apiService.fetchProduct(id);

    this.productId = productId;
    this.title = title;
    this.company = company;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;

    this.totalPrice = this.price * this.quantity;

    this.publish();
  }

  plusQuantityAndTotalPrice() {
    this.quantity += 1;
    this.totalPrice = this.price * this.quantity;

    this.publish();
  }

  minusQuantityAndTotalPrice() {
    this.quantity -= 1;
    this.totalPrice = this.price * this.quantity;

    this.publish();
  }

  resetQuantity() {
    this.quantity = 1;

    this.publish();
  }

  async requestPresent({
    userId,
    productId,
    title,
    company,
    description,
    imageUrl,
    quantity,
    receiver,
    address,
    message,
  }) {
    this.changePresentState('processing');

    try {
      const { id } = await apiService.createOrder({
        userId,
        productId,
        title,
        company,
        description,
        imageUrl,
        quantity,
        receiver,
        address,
        message,
      });

      this.receiver = receiver;
      this.address = address;
      this.message = message;

      this.changePresentState('success');
      this.publish();

      return id;
    } catch (e) {
      this.changePresentState('failed');
      this.publish();

      return '';
    }
  }

  changePresentState(state) {
    this.presentState = state;

    this.publish();
  }

  async fetchOrders() {
    this.orders = await apiService.fetchOrders();

    this.publish();
  }

  async fetchOrder(id) {
    const {
      orderId,
      productId, title, company, description, imageUrl,
      quantity, totalPrice,
      receiver, address, message, createdAt,
    } = await apiService.fetchOrder(id);

    this.orderId = orderId;
    this.productId = productId;
    this.title = title;
    this.company = company;
    this.description = description;
    this.imageUrl = imageUrl;
    this.quantity = quantity;
    this.totalPrice = totalPrice;
    this.receiver = receiver;
    this.address = address;
    this.message = message;
    this.createdAt = createdAt;

    this.publish();
  }
}
export const mallStore = new MallStore();
