import type { ButtonProps } from "../types/pokemons";

const variants = {
  primary:
    "bg-yellow-500 text-white hover:bg-yellow-600",
  secondary:
    "bg-gray-700 text-gray-300 hover:bg-gray-600",
  ghost:
    "bg-transparent text-gray-300 hover:bg-gray-800 border border-gray-600",
};

export const Button = ({
  children,
  onClick,
  disabled = false,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        block mx-auto mb-4 px-4 py-2 rounded
        transition font-semibold tracking-wide
        disabled:opacity-50 disabled:cursor-not-allowed
        cursor-pointer
        ${variants[variant]}
      `}
    >
      {children}
    </button>
  );
};