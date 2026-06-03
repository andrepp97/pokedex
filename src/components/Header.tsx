import { Link } from "react-router-dom";
import Logo from "../assets/pokedex_logo.png";
import { Dropdown } from "./Dropdown";
import { pokemonTypes } from "../constants";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 py-3 bg-primary">
      <nav className="flex flex-wrap items-center justify-between gap-4">
        <Link to="/">
          <img src={Logo} alt="Pokedex" width="100" height="100" />
        </Link>
        <Dropdown
          options={pokemonTypes.map((type) => ({
            value: type,
            label: type.charAt(0).toUpperCase() + type.slice(1),
          }))}
        />
      </nav>
    </header>
  );
};
