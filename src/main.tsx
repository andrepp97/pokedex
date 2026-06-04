import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./styles/main.css";
import { Container } from "./layout/container.tsx";
import { PokemonFilterProvider } from "./context/PokemonContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PokemonFilterProvider>
        <Container>
          <App />
        </Container>
      </PokemonFilterProvider>
    </BrowserRouter>
  </StrictMode>,
);
