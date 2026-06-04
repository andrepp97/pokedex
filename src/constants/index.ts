export const fetchLimit = 12;

export const pokemonTypes = [
  "all",
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "steel",
  "dark",
  "fairy"
];

export type PokemonType = (typeof pokemonTypes)[number];
