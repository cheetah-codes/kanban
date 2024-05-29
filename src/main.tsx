import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./index.css";
import { ThemeContextProvider, BoardContextProvider, FullScreenContextProvider } from "./context/";
import { store } from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { CloseButtonIcon } from "./components/icons";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <FullScreenContextProvider>
        <ThemeContextProvider>
          <BoardContextProvider>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={true}
              toastStyle={{
                borderRadius: "8px",
                boxShadow: "0px 12px 16px -4px #0000001A",
                border: "1px solid #b6b6b61a",
                width: "100%",
              }}
              newestOnTop={false}
              closeOnClick
              pauseOnHover
              closeButton={CloseButtonIcon}
            />
            <RouterProvider router={router} />
          </BoardContextProvider>
        </ThemeContextProvider>
      </FullScreenContextProvider>
    </Provider>
  </React.StrictMode>,
);
