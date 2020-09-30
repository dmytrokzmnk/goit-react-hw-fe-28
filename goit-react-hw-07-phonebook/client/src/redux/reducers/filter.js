import { createReducer } from "@reduxjs/toolkit";
import { filterContact } from "../actions/filter";

export default createReducer("", {
  [filterContact]: (state, { payload }) => payload,
});
