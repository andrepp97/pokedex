import { Link } from "react-router-dom";
import Logo from "../assets/pokedex_logo.png";
import { Dropdown } from "./Dropdown";
import { pokemonTypes } from "../constants";
import { usePokemonFilter } from "../context/PokemonContext";

interface DropdownOption {
  value: string;
  label: string;
}

export const Header = () => {
  const { selectedType, setSelectedType } = usePokemonFilter();

  const dropdownOptions: DropdownOption[] = pokemonTypes.sort().map((type) => ({
    value: type,
    label: type.charAt(0).toUpperCase() + type.slice(1),
  }));

  return (
    <header className="sticky top-0 z-10 py-3 bg-primary">
      <nav className="flex flex-wrap items-center justify-between gap-4">
        <Link to="/">
          <img src={Logo} alt="Pokedex" width="100" height="100" />
        </Link>
        <Dropdown
          options={dropdownOptions}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedType(e.target.value)
          }
          value={selectedType}
        />
      </nav>
    </header>
  );
};
