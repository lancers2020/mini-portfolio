import homeReducer from "./homeReducer";
import navbarReducer from "./navbarReducer";

// Export reducers as an object so they can be wired into configureStore.
// This avoids importing `combineReducers` from the core `redux` package.
export const rootReducer = {
    home: homeReducer,
    navbar: navbarReducer,
};

export default rootReducer;
