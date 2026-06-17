import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ZiweiPage } from "./pages/ZiweiPage";
import "./styles/tokens.css";
import "./styles/note-page.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ZiweiPage />
  </StrictMode>,
);
