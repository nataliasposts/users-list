import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import GlobalStoreProvider from "./HOC/GlobalStoreProvider.tsx";
import RootRouter from "./router/RootRouter.tsx";
import GlobalModalProvider from "./HOC/GlobalModalProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStoreProvider>
        <GlobalModalProvider>
          <App>
            <RootRouter />
          </App>
        </GlobalModalProvider>
      </GlobalStoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
