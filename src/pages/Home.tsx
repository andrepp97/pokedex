import { useEffect, useRef, useState } from "react";
import { Button, Header, List } from "../components";
import { fetchPokemonList } from "../services/pokemon";
import type { PokemonProps } from "../types/pokemons";

const LIMIT = 12;

const Home = () => {
  // State
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  // Ref untuk melacak offset yang sudah di-fetch
  const fetchedOffsets = useRef(new Set<number>());

  useEffect(() => {
    // Cek apakah offset sudah pernah di-fetch sebelumnya
    if (fetchedOffsets.current.has(offset)) {
      return;
    }

    fetchedOffsets.current.add(offset);

    const loadPokemon = async () => {
      try {
        setLoading(true);

        const pokemonList = await fetchPokemonList(LIMIT, offset);

        setPokemons((prev) => [...prev, ...pokemonList.results]);

        setHasMore(pokemonList.results.length > 0);
      } catch (error) {
        console.error("Failed to load pokemon:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPokemon();
  }, [offset]);

  return (
    <div>
      <Header />

      <List pokemons={pokemons} />

      {hasMore && (
        <div className="py-4">
          <Button
            onClick={() => setOffset((prev) => prev + LIMIT)}
            disabled={loading}
            variant="secondary"
          >
            {loading ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Home;
