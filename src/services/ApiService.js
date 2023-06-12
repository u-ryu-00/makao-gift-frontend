/* eslint-disable class-methods-use-this */
import axios from 'axios';

import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class ApiService {
  constructor() {
    this.accessToken = '';
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;
  }

  async postSession({ userId, password }) {
    const url = `${baseUrl}/session`;
    const { data } = await axios.post(url, { userId, password });
    return {
      accessToken: data.accessToken,
      name: data.name,
      amount: data.amount,
    };
  }

  async fetchAccount() {
    const url = `${baseUrl}/accounts/me`;
    const { data } = await axios.get(url, {
      headers: {
        authorization: `Bearer ${this.accessToken}`,
      },
    });
    return {
      name: data.name,
      userId: data.userId,
      amount: data.amount,
    };
  }

  async fetchProducts() {
    const url = `${baseUrl}/products`;
    const { data } = await axios.get(url);

    const { products } = data;
    return products;
  }

  async fetchProduct(id) {
    const url = `${baseUrl}/products/${id}`;
    const { data } = await axios.get(url);

    return {
      title: data.title,
      company: data.company,
      price: data.price,
      description: data.description,
      imageUrl: data.imageUrl,
    };
  }

  async fetchOrders() {
    const url = `${baseUrl}/orders`;
    const { data } = await axios.get(url, {
      headers: {
        authorization: `Bearer ${this.accessToken}`,
      },
    });

    const { orders } = data;
    return orders;
  }

  async createOrder({
    userId, productId, title, company, description, imageUrl, quantity, receiver, address, message,
  }) {
    const url = `${baseUrl}/orders`;
    await axios.post(url, {
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
    }, {
      headers: {
        authorization: `Bearer ${this.accessToken}`,
      },
    });
  }

  async fetchOrder(id) {
    const url = `${baseUrl}/orders/${id}`;
    const { data } = await axios.get(url);

    return {
      orderId: data.orderId,
      productId: data.productId,
      title: data.title,
      company: data.company,
      description: data.description,
      imageUrl: data.imageUrl,
      quantity: data.quantity,
      totalPrice: data.totalPrice,
      receiver: data.receiver,
      address: data.address,
      message: data.message,
      createdAt: data.createdAt,
    };
  }
}

export const apiService = new ApiService();
