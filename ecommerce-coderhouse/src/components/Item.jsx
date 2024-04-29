import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "../App.css";

export const Item = ({ product }) => {
    const { addShop } = useContext(CartContext); // Obtener la función addShop del contexto del carrito

    const addToCart = (quantity) => {
        addShop(product, quantity); // Llamar a la función addShop con el producto y la cantidad
    };

    return (
        <div className="item-wrapper">
            <div className="item-title-text-wrapper">
                <div className="item-title-text">{product.titulo}</div>
            </div>
            <div className="item-content-wrapper">
                <div className="info-wrapper">
                    <div className="text-wrapper">
                        <div className="item-description-text">
                            {product.descripcion}
                        </div>
                    </div>
                    <ItemCount
                        onAdd={addToCart}
                        stock={product.stock}
                        item={product}
                        className="item-count"
                    />
                    <Link to={`/item/${product.id}`}>
                        <button className="details-button">
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                className="more-detail-icon"
                                style={{ backgroundColor: "transparent" }}
                            />{" "}
                            Ver detalles
                        </button>
                    </Link>
                </div>
                <div className="img-wrapper">
                    <img
                        src={product.imagen}
                        alt={product.titulo}
                        className="card-img"
                    />
                    <div className="item-category-text">
                        {product.categoria}
                    </div>
                </div>
            </div>
        </div>
    );
};
