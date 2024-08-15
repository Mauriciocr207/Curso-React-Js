import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      return {
        ...state,
        pokemons: action.payload.pokemons,
        isLoading: false,        
      }
    },
    setPage: (state, action) => { state.page = action.payload }
  },
});

export const { startLoadingPokemons, setPokemons, setPage } = pokemonSlice.actions;

export default pokemonSlice.reducer;
