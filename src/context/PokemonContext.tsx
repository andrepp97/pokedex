import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type PokemonFilterContextType = {
  selectedType: string;
  setSelectedType: (type: string) => void;
};

const PokemonFilterContext = createContext<
  PokemonFilterContextType | undefined
>(undefined);

type PokemonFilterProviderProps = {
  children: ReactNode;
};

export const PokemonFilterProvider = ({
  children,
}: PokemonFilterProviderProps) => {
  const [selectedType, setSelectedType] = useState("all");

  const value = useMemo(
    () => ({
      selectedType,
      setSelectedType,
    }),
    [selectedType],
  );

  return (
    <PokemonFilterContext.Provider value={value}>
      {children}
    </PokemonFilterContext.Provider>
  );
};

export const usePokemonFilter = () => {
  const context = useContext(PokemonFilterContext);

  if (!context) {
    throw new Error(
      "usePokemonFilter must be used within PokemonFilterProvider",
    );
  }

  return context;
};
