import { apiService } from '../services/ApiService';

export default class MallStore {
  constructor() {
    this.listeners = new Set();

    this.userId = '';
    this.name = '';
    this.password = '';
    this.amount = 0;

    this.products = [];
    this.totalPages = 0;
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

    this.loginState = '';
    this.signupState = '';

    this.errorMessage = '';
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
    this.changeLoginState('processing');
    try {
      const { accessToken, name, amount } = await apiService.postSession({
        userId, password,
      });

      this.name = name;
      this.amount = amount;
      this.changeLoginState('success');

      return accessToken;
    } catch (e) {
      this.changeLoginState('fail');
      return '';
    }
  }

  changeLoginState(state) {
    this.loginState = state;
    this.publish();
  }

  async signup({
    name, userId, password, confirmPassword,
  }) {
    this.changeSignupState('processing');
    try {
      const { accessToken, amount } = await apiService.postAccounts({
        name, userId, password, confirmPassword,
      });
      this.amount = amount;
      this.changeSignupState('success');

      return accessToken;
    } catch (e) {
      const { message } = e.response.data;
      this.changeSignupState('fail', { errorMessage: message });
      return '';
    }
  }

  changeSignupState(state, { errorMessage = '' } = {}) {
    this.errorMessage = errorMessage;
    this.signupState = state;

    this.publish();
  }

  async fetchAccount() {
    const { name, userId, amount } = await apiService.fetchAccount();

    this.name = name;
    this.userId = userId;
    this.amount = amount;

    this.publish();
  }

  async fetchProducts(pageNumber) {
    const data = await apiService.fetchProducts(pageNumber);
    this.products = data.products;
    this.totalPages = data.totalPages;

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
      await apiService.createOrder({
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
      this.changePresentState('success');
    } catch (e) {
      this.changePresentState('fail');
    }
  }

  changePresentState(state) {
    this.presentState = state;

    this.publish();
  }

  async fetchOrders(pageNumber) {
    const data = await apiService.fetchOrders(pageNumber);
    this.orders = data.orders;
    this.totalPages = data.totalPages;

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

  get isSignupFail() {
    return this.signupState === 'fail';
  }

  get isPresentFail() {
    return this.presentState === 'fail';
  }
}
export const mallStore = new MallStore();
