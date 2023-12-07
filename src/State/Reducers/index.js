import { combineReducers } from "redux";
import AmountReducer from "./AmountReducer";
const Reducers = combineReducers({
  amount: AmountReducer,
});
export default Reducers;
