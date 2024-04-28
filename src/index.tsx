import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./core/theme";
import { ThemeProvider } from "./core/theme/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <GlobalStyle />
        <RouterProvider router={router} />
      </React.StrictMode>
    </QueryClientProvider>
  </ThemeProvider>
);
