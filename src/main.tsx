import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "./theme.ts";
import MainStyles from "./MainStyles.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter basename="/">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={customTheme}>
          <MainStyles />
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </HashRouter>
  </React.StrictMode>
);
