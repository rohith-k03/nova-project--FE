import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { baseApiRoot } from '../endpoint/api';

const PUBLIC_PATHS = [
  '/auth/login',
  '/auth/register',
  '/auth/forgot-password',
  '/auth/verify-otp',
  '/auth/reset-password',
];

const rawBaseQuery = fetchBaseQuery({
  baseUrl: baseApiRoot,
  timeout: 60000,
  prepareHeaders: async (headers) => {
    headers.set('Content-Type', 'application/json');

    try {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
    } catch (error) {
      console.log('Token Error:', error);
    }

    return headers;
  },
});

const baseQueryWithAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions);
  const url = typeof args === 'string' ? args : args.url;

  if (result.error?.status === 401 && !PUBLIC_PATHS.includes(url)) {
    await AsyncStorage.removeItem('token');
    api.dispatch({ type: 'rootApi/resetApiState' });
  }

  return result;
};

export const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: baseQueryWithAuth,
  tagTypes: ['User', 'Users', 'Products', 'Orders'],
  endpoints: () => ({}),
});