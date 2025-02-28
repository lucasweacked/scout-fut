import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Header from "./components/Header/Header";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
  </StrictMode>
);
