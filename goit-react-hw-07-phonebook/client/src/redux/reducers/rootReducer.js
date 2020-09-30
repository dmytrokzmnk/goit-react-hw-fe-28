import { combineReducers } from "redux";
import arrContacts from "./contacts";
import filterName from "./filter";
import loader from "./loader";
import error from "./error";

const rootReducer = combineReducers({
  contacts: arrContacts,
  filter: filterName,
  loader: loader,
  error: error,
});

export default rootReducer;
