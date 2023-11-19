import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = { activeLink: "" };

const activeNameSlice = createSlice({
  name: "activeNameSlice",
  initialState,
  reducers: {
    setActiveLink: (state, action: PayloadAction<any>) => {
      state.activeLink = action.payload;
    },
  },
});
export const selectActiveLink = (state: RootState) =>
  state.activeLink.activeLink;

export const { setActiveLink } = activeNameSlice.actions;

export default activeNameSlice.reducer;
