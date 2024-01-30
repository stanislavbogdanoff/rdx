import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import statusReducer from "./statusReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  status: statusReducer,
});

export default rootReducer;
