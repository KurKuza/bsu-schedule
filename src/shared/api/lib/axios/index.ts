import axios from 'axios';
import { BASE_URL } from './config';

import { buildWebStorage, setupCache } from 'axios-cache-interceptor';

const apiAxios = axios.create({
  baseURL: BASE_URL,
});

// export const apiInstance = apiAxios;
export const apiInstance = setupCache(apiAxios, {
  storage: buildWebStorage(localStorage, 'axios-cache:'),
});
