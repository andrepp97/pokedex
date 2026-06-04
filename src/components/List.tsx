import type { PokemonProps } from "../types/pokemons";
import { Card } from "./Card";

export const List = ({ pokemons }: { pokemons: PokemonProps[] }) => {
  return (
    <section className="py-4">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemons.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
        ))}
      </div>
    </section>
  );
};
