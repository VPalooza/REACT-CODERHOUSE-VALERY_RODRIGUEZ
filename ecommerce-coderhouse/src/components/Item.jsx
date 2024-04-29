import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount"; // Importar el componente ItemCount
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "../App.css";

export const Item = ({ product }) => {
    const { addShop } = useContext(CartContext); // Obtener la función addShop del contexto del carrito

    const addToCart = (quantity) => {
        addShop(product, quantity); // Llamar a la función addShop con el producto y la cantidad
    };

    return (
        <div className="item-wrapper">
            <div className="info-wrapper">
                <div className="item-title-text">{product.titulo}</div>
                <div className="item-description-text">
                    {product.descripcion}
                </div>
                <div className="item-category-text">{product.categoria}</div>
                <ItemCount
                    onAdd={addToCart}
                    stock={product.stock}
                    item={product}
                />
                <Link to={`/item/${product.id}`}>
                    <button className="details-button">Ver detalles</button>
                </Link>
            </div>
            <div className="img-wrapper">
                <div className="card-body">
                    <img
                        src={product.imagen}
                        alt={product.titulo}
                        className="card-img"
                    />
                </div>
            </div>
        </div>
    );
};
