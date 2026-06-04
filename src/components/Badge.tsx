import type { PokemonType } from "../constants";

interface BadgeProps {
  variant: PokemonType;
}

const badgeColors: Record<PokemonType, string> = {
  all: "bg-gray-500 text-white",
  normal: "bg-stone-400 text-white",
  fire: "bg-orange-500 text-white",
  water: "bg-blue-500 text-white",
  electric: "bg-yellow-400 text-black",
  grass: "bg-green-500 text-white",
  ice: "bg-cyan-300 text-black",
  fighting: "bg-red-700 text-white",
  poison: "bg-purple-600 text-white",
  ground: "bg-amber-600 text-white",
  flying: "bg-indigo-400 text-white",
  psychic: "bg-pink-500 text-white",
  bug: "bg-lime-600 text-white",
  rock: "bg-yellow-700 text-white",
  ghost: "bg-violet-700 text-white",
  dragon: "bg-indigo-700 text-white",
  steel: "bg-slate-500 text-white",
  dark: "bg-gray-800 text-white",
  fairy: "bg-pink-300 text-black",
};

export const Badge = ({ variant }: BadgeProps) => {
  return (
    <span
      className={`
        inline-flex items-center
        px-3 py-1
        rounded-full
        text-xs font-semibold
        capitalize
        transition
        ${badgeColors[variant]}
      `}
    >
      {variant}
    </span>
  );
};
