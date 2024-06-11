import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import navbarReducer from "./navbarReducer";

export const rootReducer = combineReducers({
    homeReducer,
    navbarReducer
});

export default rootReducer;
