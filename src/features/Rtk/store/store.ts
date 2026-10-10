
import { configureStore } from '@reduxjs/toolkit';
import { rootApi } from '@/features/Rtk/api/rootapi';

export const store = configureStore({
  reducer: {
    [rootApi.reducerPath]: rootApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootApi.middleware),
});