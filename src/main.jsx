import "./index.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LanguageProvider } from "./context/language-context.jsx";

import "wicg-inert";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
