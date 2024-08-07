import PokemonCard from "./PokemonCard";
import {array} from "prop-types";

export default function PokemonGroup({pokeGroups}) {
  return (
    <>
      {pokeGroups.map((pokeGroup) => (
        <div key={JSON.stringify(pokeGroup)} className="grid grid-cols-2 md:grid-cols-1 gap-4 w-full" >
            {pokeGroup.map((pokemon) => <PokemonCard key={pokemon.name} {...pokemon}/>)}
        </div>
      ))}
    </>
  );
}

PokemonGroup.propTypes = {
  pokeGroups: array.isRequired,
}


