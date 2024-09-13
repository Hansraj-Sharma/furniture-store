import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cartProvider";
import { SignProvider } from "./context/registerProvider";
import { AddressProvider } from "./context/addressProvider";
import { SnackProvider } from "./context/snackProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartProvider>
      <SignProvider>
        <AddressProvider>
          <SnackProvider>
            <App />
          </SnackProvider>
        </AddressProvider>
      </SignProvider>
    </CartProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
