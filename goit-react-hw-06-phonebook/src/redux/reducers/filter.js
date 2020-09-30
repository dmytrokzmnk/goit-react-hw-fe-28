import { createSlice } from "@reduxjs/toolkit";
const filterName = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    changeFilter: (state, { payload }) => (state = payload),
  },
});

export const { changeFilter } = filterName.actions;

export const filterState = (state) => state.filter;

export default filterName.reducer;
