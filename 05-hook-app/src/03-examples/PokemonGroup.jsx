import PokemonCard from "./PokemonCard";

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
