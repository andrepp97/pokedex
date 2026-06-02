import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/main.css";
import { Container } from "./layout/container.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container>
      <App />
    </Container>
  </StrictMode>,
);
