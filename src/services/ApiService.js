/* eslint-disable class-methods-use-this */
import axios from 'axios';

import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class ApiService {
  async postSession({ userId, password }) {
    const url = `${baseUrl}/session`;
    const { data } = await axios.post(url, { userId, password });
    return {
      accessToken: data.accessToken,
      amount: data.amount,
    };
  }

  async fetchAccount() {
    const url = `${baseUrl}/accounts/me`;
    // TODO: access token을 header로 넘겨줄 것!
    const { data } = await axios.get(url);
    return {
      userId: data.userId,
      amount: data.amount,
    };
  }
}

export const apiService = new ApiService();
