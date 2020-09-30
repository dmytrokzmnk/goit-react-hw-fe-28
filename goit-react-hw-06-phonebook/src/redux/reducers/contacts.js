import { createSlice } from "@reduxjs/toolkit";
const arrContactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    add: (state, { payload }) => [...state, payload],
    remove: (state, { payload }) =>
      state.filter((contact) => contact.id !== payload),
    show: (state, { payload }) => [...state, ...payload],
  },
});

export const { add, remove, show } = arrContactsSlice.actions;

export const contactsState = (state) => state.contacts;

export default arrContactsSlice.reducer;
