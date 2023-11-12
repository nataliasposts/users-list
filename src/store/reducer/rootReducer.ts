import { combineReducers } from "redux";
import userReducer from "./userReducer";
import RootState from "../state/RootState";

const rootReducer = combineReducers<RootState>({
  userReducer,
});
export default rootReducer;
