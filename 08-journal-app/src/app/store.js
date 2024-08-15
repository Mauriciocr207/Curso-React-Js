import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./features/auth";
import journalSlice from "./features/journal/journalSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        journal: journalSlice,
    }
});

export default store;