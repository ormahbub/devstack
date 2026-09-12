import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// Inter imports
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css"; // Extra Bold
import "@fontsource/inter/900.css"; // Black

// Plus Jakarta Sans imports
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css"; // Extra Bold

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,  
);
