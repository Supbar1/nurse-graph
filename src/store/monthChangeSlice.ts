import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";


const initialState = { monthChange: 0 };

const monthChangeSlice = createSlice({
  name: "monthChange",
  initialState,
  reducers: {
    switchMonth:(state,action:PayloadAction<any>)=>{
state.monthChange += action.payload
    }
  },
});
export const selectMonthChange = (state: RootState) => state.monthChange;

export const {switchMonth} = monthChangeSlice.actions;

export default monthChangeSlice.reducer;
