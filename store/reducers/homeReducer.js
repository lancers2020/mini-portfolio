import { HOME_SIDEBAR } from "../actions";
import { CONTENT_PAGE } from "../actions";

const initialState = {
    activeSidebar: "journey",
    activePage: 0,
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOME_SIDEBAR:
            return {
                ...state,
                activeSidebar: action.payload,
            };
        case CONTENT_PAGE:
            return {
                ...state,
                activePage: action.payload,
            };
        default:
            return state;
    }
};

export default homeReducer;
