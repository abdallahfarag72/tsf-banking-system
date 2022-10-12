import { combineReducers } from "redux";
import customers from "./customers";
import transfers from "./transfers";

export default combineReducers({
    customers,
    transfers
})