import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice, authSlice } from "./features";

const store = configureStore({
    reducer: {
        auth: authSlice,
        calendar: calendarSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store;