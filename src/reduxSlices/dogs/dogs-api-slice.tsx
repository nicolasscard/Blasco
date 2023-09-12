
// ducks pattern
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL, API_KEY, breedsURL } from '../../constants/dogs';
import { Breed } from '../../interfaces/dogs';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders(headers) {
      headers.set('x-api-key', API_KEY);

      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 200) {  // limit for pagination
          return `${breedsURL}?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = apiSlice;
