import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./reset.scss";
import "./index.scss";
import { LanguageProvider } from "./context/LanguageContext";
import GlobalErrorBoundary from "./components/GlobalErrorBoundary";
import { ModalProvider } from "./context/ModalContext";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <ModalProvider>
          <HelmetProvider>
            <BrowserRouter basename="/scienseSchool">
              <GlobalErrorBoundary>
                <App />
              </GlobalErrorBoundary>
            </BrowserRouter>
          </HelmetProvider>
        </ModalProvider>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
