import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../../services/config.json";
import { RootState } from "../store";
import axios from "axios";

export const fetchNurses = createAsyncThunk("/fetchUsers", async () => {
  const { data } = await axios.get(config.apiNurses);
  return data;
});

export interface NurseType {
  id?: number;
  firstName?: string;
  lastName?: string;
  picture?: string;
}
interface InitialStateType {
  nurses: NurseType[];
  actualNurse: NurseType;
}
const initialState: InitialStateType = {
  nurses: [],
  actualNurse: {id: 0,firstName:"",lastName:""},
};
const nursesSlice = createSlice({
  name: "nurses",
  initialState,
  reducers: {
    pickedNurse(state, action: PayloadAction<NurseType>) {
      state.actualNurse = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchNurses.fulfilled, (state, action) => {
      const { results } = action.payload;
      let nursesFromApi = [];
      for (let item of results) {
        const nurseObject = {
          firstName: item.name.first,
          lastName: item.name.last,
          picture: item.picture.thumbnail,
          id: item.location.street.number,
        };
        nursesFromApi.push(nurseObject);
      }
      action.payload = nursesFromApi;
      state.nurses = nursesFromApi;
      //   return action.payload;
    });
  },
});
export const selectNurses = (state: RootState) => state.nurses.nurses;

export const selectActualNurse = (state: RootState) => state.nurses.actualNurse;

export const { pickedNurse } = nursesSlice.actions;

export default nursesSlice.reducer;
