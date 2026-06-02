import Logo from "../assets/pokedex_logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 py-4 bg-primary">
      <nav className="flex flex-wrap items-center justify-between gap-4">
        <img src={Logo} alt="Pokedex" width="100" height="100" />
      </nav>
    </header>
  );
};
