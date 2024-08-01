import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import useCounter from "../hooks/useCounter";
import getArraysIntoArray from "../utilities/getArraysIntoArray";
import Loading from "./Loading";
import PokemonGroup from "./PokemonGroup";
import Cache from "../utilities/Cache";

const cache = Cache();

export default function MultipleCustomHooks() {
  const { counter, increment, decrement } = useCounter(0);
  const [pokeGroups, setPokeGroups] = useState([]);
  const { data, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${counter * 12}`, 
    cache
  );

  useEffect(() => {
    if (Array.isArray(data?.results)) {
      const newPokeGroups = getArraysIntoArray(data.results, {
        minElementsByArray: 4,
        maxElementsByArray: 4,
        cols: 3,
      });
      setPokeGroups(newPokeGroups);
    }
  }, [data]);

  return (
    <>
      <h1 className="text-3xl font-semibold text-gray-700">
        Multiple Custom Hooks
      </h1>
      <p className="text-md font-bold text-gray-500 mt-4">Use the Poke Api</p>
      <div className="m-auto w-5/6 mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          isLoading 
            ? <Loading/>
            : <PokemonGroup pokeGroups={pokeGroups}/>
        }
      </div>

      <div className="flex mt-10 justify-between m-auto max-w-[25rem] items-center">
        <button
          onClick={() => counter > 0 && decrement()}
          className="p-4 bg-blue-600 rounded-lg text-white text-xl font-bold"
        >
          Anterior
        </button>
        <p className="text-lg">
          Página{counter > 1 && "s"} {counter}
        </p>
        <button
          onClick={() => increment()}
          className="p-4 bg-blue-600 rounded-lg text-white text-xl font-bold"
        >
          Siguiente
        </button>
      </div>
    </>
  );
}
