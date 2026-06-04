import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "../components/Badge";
import { fetchPokemonDetail } from "../services/pokemon";
import type { PokemonDetailProps } from "../types/pokemons";

const PokemonDetailPage = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState<PokemonDetailProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const data = await fetchPokemonDetail(id!);
        setPokemon(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getPokemon();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto py-10 text-center">Loading...</div>
    );
  }

  if (!pokemon) {
    return (
      <div className="container mx-auto py-10 text-center">
        Pokemon not found
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <Link to="/" className="inline-block mb-6 text-gray-400 hover:text-white">
        ← Back
      </Link>

      <div className="bg-gray-800 rounded-2xl p-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            className="w-64 h-64 object-contain"
          />

          <div className="flex-1">
            <span className="text-gray-400 text-lg">
              #{String(pokemon.id).padStart(4, "0")}
            </span>

            <h1 className="text-4xl font-bold capitalize mt-2">
              {pokemon.name}
            </h1>

            <div className="flex gap-2 mt-4">
              {pokemon.types.map((type: { type: { name: string } }) => (
                <Badge key={type.type.name} variant={type.type.name} />
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div>
                <p className="text-gray-400 text-sm">Height</p>
                <p className="font-semibold">{pokemon.height / 10} m</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Weight</p>
                <p className="font-semibold">{pokemon.weight / 10} kg</p>
              </div>

              <div>
                <p className="text-gray-400 text-sm">Base EXP</p>
                <p className="font-semibold">{pokemon.base_experience}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Base Stats</h2>

          <div className="space-y-4">
            {pokemon.stats.map(
              (stat: { stat: { name: string }; base_stat: number }) => (
                <div key={stat.stat.name}>
                  <div className="flex justify-between mb-1">
                    <span className="capitalize">{stat.stat.name}</span>
                    <span>{stat.base_stat}</span>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full"
                      style={{
                        width: `${Math.min(stat.base_stat, 255) / 2.55}%`,
                      }}
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
