import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

interface Props {
  id: string;
  name: string;
}
const initialState = { value: 0 };
const monthChangeSlice = createSlice({
  name: "monthChange",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("====================================");
      console.log(state);
      console.log("====================================");
      state.value += 1;
    },
    decrement: (state) => {
      console.log(state);
      state.value -= 1;
    },
  },
});
export const selectAllUsers = (state: RootState) => state.monthChange;

export default monthChangeSlice.reducer;
