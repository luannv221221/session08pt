import { combineReducers } from "redux";
import { quantity } from "./quantity";

const rootReducer = combineReducers({
    quantity: quantity,
});

export default rootReducer;