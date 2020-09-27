import { API_URL } from '../Constants/Config';
import { httpGet } from './ApiService';

const getList = () => {
  const url = `${API_URL}/user/list`;
  return httpGet(url);
}

export {
  getList
}