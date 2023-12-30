import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = { activelink: "" };

const activeNameSlice = createSlice({
  name: "activeNameSlice",
  initialState,
  reducers: {
    setActiveLink: (state, action: PayloadAction<any>) => {
      state.activelink = action.payload;
    },
  },
});
export const selectActiveLink = (state: RootState) =>
  state.activelink.activelink;

export const { setActiveLink } = activeNameSlice.actions;

export default activeNameSlice.reducer;
