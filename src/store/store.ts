import { configureStore } from '@reduxjs/toolkit';
import monthChangeSlice from './monthChangeSlice';

export const store = configureStore({
  reducer: {
    monthChange: monthChangeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
