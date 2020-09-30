import { configureStore } from "@reduxjs/toolkit";
import contacts from "../reducers/contacts";
import filter from "../reducers/filter";

const rootReducer = {
  contacts,
  filter,
};

const globalState = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
export default globalState;
