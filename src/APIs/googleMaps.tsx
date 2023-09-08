import axios from 'axios';
import { baseURL, API_KEY, PLACE_ID } from '../constants/googlePlaces';

export const googleMapsPlaceRequest = axios.create({
    baseURL: baseURL,
});

