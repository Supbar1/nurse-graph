import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = { username: null };

const usernameSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    setActualAcount: (state, action: PayloadAction<any>) => {
      state.username = action.payload;
    },
  },
});
export const selectUsername = (state: RootState) => state.username;

export const { setActualAcount } = usernameSlice.actions;

export default usernameSlice.reducer;
