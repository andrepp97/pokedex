import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import PokemonDetailPage from "./pages/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
