import { NAVBAR_BUTTON_ACTIVE } from "../actions";

const initialState = {
    activeNavbarButton: "AboutMe"
}

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAVBAR_BUTTON_ACTIVE: 
            return {
                ...state,
                activeNavbarButton: action.payload
            };
        default:
            return state;
    }
}

export default navbarReducer;