import { configureStore } from "@reduxjs/toolkit";
import topBarSlice from "./features/topBarSlice";

const store = configureStore({
    reducer : {
    topBar : topBarSlice.reducer
    },
});

export default store;