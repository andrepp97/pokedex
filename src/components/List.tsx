import type { Pokemon } from "../types/pokemons";

export const List = ({ pokemons }: { pokemons: Pokemon[] }) => {
  return (
    <section className="py-4">
      <h2 className="text-xl font-bold mb-2">Pokemon List</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemons.map((pokemon, index) => (
          <li key={`pokemon-${index}`} className="bg-gray-700 p-4 rounded shadow">
            <h3 className="text-lg capitalize">{pokemon.name}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};
