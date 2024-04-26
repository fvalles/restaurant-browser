import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalStyle } from "./core/theme";
import { ThemeProvider } from "./core/theme/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <GlobalStyle />
        <App />
      </React.StrictMode>
    </QueryClientProvider>
  </ThemeProvider>
);
