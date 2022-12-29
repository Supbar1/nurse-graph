import { configureStore } from "@reduxjs/toolkit";
import monthChangeSlice from "./slices/monthChangeSlice";
import usernameSlice from "./slices/usernameSlice";
import nursesSlice from "./nursesSlice";

export const store = configureStore({
  reducer: {
    monthChange: monthChangeSlice,
    username: usernameSlice,
    nurses: nursesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
