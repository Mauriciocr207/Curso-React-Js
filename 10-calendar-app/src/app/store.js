import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice, uiSlice } from "./features";

const store = configureStore({
    reducer: {
        calendar: calendarSlice,
        ui: uiSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store;