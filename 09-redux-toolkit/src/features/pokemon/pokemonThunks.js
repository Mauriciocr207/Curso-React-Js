import pokeApi from "../../api/pokeApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = ( page = 0 ) => {
    return async (dispatch, getState) => {
        dispatch( startLoadingPokemons() );
        const response = await pokeApi.get(`pokemon?limit=8&offset=${page * 10}`);
        const { results } = response.data;
        dispatch( setPokemons({
            pokemons: results
        }));
    }
}