export const baseApiRoot = 'https://nova-backend-azgt.onrender.com/api';

const routeApi = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    me: '/auth/me',
    forgotPass: '/auth/forgot-password',
    verifyOtp: '/auth/verify-otp',
    resetPass: '/auth/reset-password',
  },

  app: {},
};

export default routeApi;