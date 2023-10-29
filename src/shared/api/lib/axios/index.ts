/* eslint-disable no-console */
import axios from 'axios';
import { BASE_URL } from './config';

import { setupCache } from 'axios-cache-interceptor';

const apiAxios = axios.create({
  baseURL: BASE_URL,
});

// export const apiInstance = apiAxios;
export const apiInstance = setupCache(apiAxios, { cacheTakeover: true, debug: console.log });
