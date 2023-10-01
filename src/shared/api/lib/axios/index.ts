import axios from 'axios';
import { BASE_URL } from './config';

export const apiInstance = axios.create({
  baseURL: BASE_URL,
});
