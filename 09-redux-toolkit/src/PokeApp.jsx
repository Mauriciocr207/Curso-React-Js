import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getPokemons} from "./features/pokemon";
import { setPage } from "./features/pokemon/pokemonSlice";

export default function PokeApp() {
  const dispatch = useDispatch();
  const { isLoading, page, pokemons} = useSelector(state => state.pokemon);

  useEffect(() => { dispatch(getPokemons(page)) }, [page])

  const handleChangePage = (newPage) => {
    dispatch(setPage(newPage));
  }
  
  return (
    <>
        <h1>Pokemon App</h1>
        <span>Loading: {  }</span>
        <ul>
          {pokemons.map(pokemon => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
        <div style={{display: "flex", gap: "1rem", justifyContent: "center"}}>
          <button disabled={isLoading} onClick={() => page > 0 && handleChangePage(page - 1)}>
            Prev Page
          </button>
          <span>page {page + 1}</span>
          <button disabled={isLoading} onClick={() => handleChangePage(page + 1)}>
            Next Page
          </button>
        </div>
    </>
  )
}