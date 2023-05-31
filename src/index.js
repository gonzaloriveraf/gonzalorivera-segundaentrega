import React from "react";
import { initializeApp } from "firebase/app";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartContextProvider } from "./context/CartContext";

const firebaseConfig = {
  apiKey: "AIzaSyA3xI6byWHXJnnCKrYrmCg9Hmj4pJG8S_k",
  authDomain: "base-tienda-8e42d.firebaseapp.com",
  projectId: "base-tienda-8e42d",
  storageBucket: "base-tienda-8e42d.appspot.com",
  messagingSenderId: "890334690710",
  appId: "1:890334690710:web:9e7ee1ddbbe3c3a4f5b1b7",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
