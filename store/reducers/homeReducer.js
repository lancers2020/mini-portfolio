import { HOME_SIDEBAR } from "../actions";

const initialState = {
    activeSidebar: "journey",
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOME_SIDEBAR:
            return {
                ...state,
                activeSidebar: action.payload,
            };
        default:
            return state;
    }
};

export default homeReducer;
