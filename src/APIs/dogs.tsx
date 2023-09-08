import axios from 'axios';
import { baseURL, API_KEY } from '../constants/dogs';

export const dogRequest = axios.create({
    baseURL: baseURL,
    headers: {
        'x-api-key':API_KEY,
      },
});
