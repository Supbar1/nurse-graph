import { configureStore } from "@reduxjs/toolkit";
import monthChangeSlice from "./slices/monthsSlice";
import usernameSlice from "./slices/usernameSlice";
import nursesSlice from "./slices/nursesSlice";
import activeLinkSlice from "./slices/activeLinkSlice";

export const store = configureStore({
  reducer: {
    monthChange: monthChangeSlice,
    username: usernameSlice,
    nurses: nursesSlice,
    activeLink: activeLinkSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
