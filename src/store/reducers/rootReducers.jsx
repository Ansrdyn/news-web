import { combineReducers } from "redux";
import newsReducers from "./newsReducers";
import userLoginReducers from "./userLoginReducers";

const rootReducers = combineReducers({
  news: newsReducers,
  // userLogin: userLoginReducers
});

export default rootReducers;
