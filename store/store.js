import { configureStore } from "@reduxjs/toolkit";
import { default as homeReducer } from "./reducers/homeReducer";
import { default as navbarReducer } from "./reducers/navbarReducer";

const store = configureStore({
  reducer: {
    home: homeReducer,
    navbar: navbarReducer,
  },
});

export default store;
