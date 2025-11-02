import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeSidebar: "journey",
    activePage: 0,
};

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        // keep the original action names for compatibility
        homeSidebar(state, action) {
            state.activeSidebar = action.payload;
        },
        contentPage(state, action) {
            state.activePage = action.payload;
        },
    },
});

export const { homeSidebar, contentPage } = homeSlice.actions;

export default homeSlice.reducer;
