import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";
import { CartProvider } from "./contexts/CartContext.jsx";
const firebaseConfig = {
    apiKey: "AIzaSyBiemeJyzoPhcnmpVFibjP1Uq66mvYqlgc",
    authDomain: "tienda-aromatica.firebaseapp.com",
    projectId: "tienda-aromatica",
    storageBucket: "tienda-aromatica.appspot.com",
    messagingSenderId: "883858525671",
    appId: "1:883858525671:web:292304f35cbdd3aff4c142",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
    <CartProvider>
        <App />
    </CartProvider>
);
