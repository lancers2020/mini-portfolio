import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeNavbarButton: "AboutMe",
};

const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        // preserve action name for compatibility
        navbarButtonActive(state, action) {
            state.activeNavbarButton = action.payload;
        },
    },
});

export const { navbarButtonActive } = navbarSlice.actions;

export default navbarSlice.reducer;