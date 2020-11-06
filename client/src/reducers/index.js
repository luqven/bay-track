import { combineReducers } from "redux";
import authReducer from "./authReducer";
import listingReducer from "./listingReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  listings: listingReducer,
  errors: errorReducer
});
