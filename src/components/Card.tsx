import { useEffect, useState } from "react";
import { Badge } from "./Badge";
import { fetchPokemonDetail } from "../services/pokemon";
import type { PokemonProps } from "../types/pokemons";

export const Card = ({ pokemon }: { pokemon: PokemonProps }) => {
  const splittedUrl = pokemon.url.split("/");
  const pokemonId = splittedUrl[splittedUrl.length - 2];
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  const dynamicPokemonId = () => String(pokemonId).padStart(4, "0");

  const [pokemonDetail, setPokemonDetail] = useState<PokemonProps | null>(null);

  useEffect(() => {
    const getPokemonDetail = async () => {
      try {
        const pokemonDetail = await fetchPokemonDetail(pokemonId);
        setPokemonDetail(pokemonDetail);
        console.log("Pokemon detail: ", pokemonDetail);
      } catch (error) {
        console.error("Error fetching Pokemon detail: ", error);
      }
    };

    getPokemonDetail();
  }, []);

  return (
    <div className="bg-gray-700 p-2 rounded-lg shadow flex flex-col items-center hover:bg-gray-600 transition cursor-pointer">
      <img
        src={imgUrl}
        alt={pokemon.name}
        height={100}
        width={100}
        loading="lazy"
      />
      <span className="block text-sm text-gray-400 tracking-wide">
        #{dynamicPokemonId()}
      </span>
      <h3 className="text-lg capitalize tracking-wider">{pokemon.name}</h3>
      {pokemonDetail ? (
        <div className="flex gap-2 mt-2">
          {pokemonDetail.types.map(
            (type: { type: { name: string } }, index: number) => (
              <Badge key={index} variant={type?.type?.name} />
            ),
          )}
        </div>
      ) : null}
    </div>
  );
};
