import AsyncStorage from '@react-native-async-storage/async-storage';
import { rootApi } from '../rootapi';

interface User {
  id: string;
  fullName: string;
  email: string;
}

interface AuthResponse {
  message: string;
  token: string;
  user: User;
}

interface MessageResponse {
  message: string;
}

interface VerifyOtpResponse {
  message: string;
  resetToken: string;
}

interface MeResponse {
  user: User;
}

interface RegisterBody {
  fullName: string;
  email: string;
  password: string;
}

interface LoginBody {
  email: string;
  password: string;
}

interface ForgotPasswordBody {
  email: string;
}

interface VerifyOtpBody {
  email: string;
  otp: string;
}

interface ResetPasswordBody {
  resetToken: string;
  newPassword: string;
}

const saveToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.log('Token Save Error:', error);
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (error) {
    console.log('Token Remove Error:', error);
  }
};

export const controllerAuthApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<AuthResponse, RegisterBody>({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          await saveToken(data.token);
        } catch {}
      },
    }),

    login: builder.mutation<AuthResponse, LoginBody>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Users'],
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          await saveToken(data.token);
        } catch {}
      },
    }),

    getMe: builder.query<MeResponse, void>({
      query: () => ({
        url: '/auth/me',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),

    forgotPassword: builder.mutation<MessageResponse, ForgotPasswordBody>({
      query: (body) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body,
      }),
    }),

    verifyOtp: builder.mutation<VerifyOtpResponse, VerifyOtpBody>({
      query: (body) => ({
        url: '/auth/verify-otp',
        method: 'POST',
        body,
      }),
    }),

    resetPassword: builder.mutation<MessageResponse, ResetPasswordBody>({
      query: (body) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          await queryFulfilled;
          await removeToken();
        } catch {}
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetMeQuery,
  useForgotPasswordMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
} = controllerAuthApi;