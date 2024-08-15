import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import pokemonSlice from "../features/pokemon/pokemonSlice";
import todosApi from "../features/todos/todosApi";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        pokemon: pokemonSlice,
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat( todosApi.middleware )
});

export default store; 