import useFetch from "../hooks/useFetch";
import Cache from "../utilities/Cache";
import { string } from "prop-types";

const cache = Cache();

export default function PokemonCard({url, name}) {
  const {data, isLoading} = useFetch(url, cache);

  return (
    <>
      <div
        data-testid="PokemonCard"
        className="bg-gray-700 w-full rounded-lg flex flex-col items-center"
        key={url}
      >
        {
          !isLoading && <img src={data.sprites.front_default} alt="name" className="object-contain w-full h-[5rem]"/>
        }
        <p className="font-semibold text-gray-200 text-xs text-center w-full pb-4">{name}</p>
      </div>
    </>
  );
}

PokemonCard.propTypes = {
  url: string.isRequired,
  name: string.isRequired
}
