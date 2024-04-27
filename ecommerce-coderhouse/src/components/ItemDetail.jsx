import React from "react";
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ product }) => {
    const { addShop } = useContext(CartContext);

    const add = (quantity) => addShop(product, quantity);

    return (
        <>
            <Link to="/">
                <button className="home-button">Volver</button>
            </Link>
            <div>{product.titulo}</div>
            <img src={product.imagen} alt={product.titulo} />
            <div>Stock:{product.stock}</div>
            <ItemCount onAdd={add} stock={product.stock} />
            <footer className="footer-index">hecho con amorcito</footer>
        </>
    );
};
