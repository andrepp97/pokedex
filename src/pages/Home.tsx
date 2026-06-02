import { useCallback, useEffect, useState } from "react";
import { Header, List } from "../components";
import { fetchPokemonList } from "../services/pokemon";

const Home = () => {
    // State
    const [pokemons, setPokemons] = useState([]);

  // Functions
  const fetchPokemon = useCallback(async () => {
    try {
      const pokemonList = await fetchPokemonList(48, 0);
      setPokemons(pokemonList.results);
    } catch (error) {
      console.error("Error loading Pokemon: ", error);
    }
  }, []);

  // Lifecycle
  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  //   Render
  return (
    <div>
      <Header />
      <List pokemons={pokemons} />
    </div>
  );
};

export default Home;
