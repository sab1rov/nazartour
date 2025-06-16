import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/scss/main.scss";
import LanguageContextProvider from "./contexts/LanguageContext.jsx";

createRoot(document.querySelector(".wrapper")).render(
    <LanguageContextProvider>
        <App />
    </LanguageContextProvider>
);
