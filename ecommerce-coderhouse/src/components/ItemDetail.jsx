import React, { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const ItemDetail = ({ item }) => {
    const { addShop } = useContext(CartContext);

    const add = (quantity) => addShop(item, quantity);

    return (
        <>
            <div className="item-detail-wrapper">
                <div className="item-details-left-wrapper">
                <Link to="/">
                    <button className="home-button">
                        <FontAwesomeIcon icon={faChevronLeft} /> Volver
                    </button>
                </Link>
                <div className="item-detail-title">{item.titulo}</div>
                <div className="item-detail-stock">Stock: {item.stock}</div>
                </div>
                <div className="img-item-detail-wrapper"><img
                    src={item.imagen}
                    alt={item.titulo}
                    className="item-detail-img"
                />
                </div>
                <ItemCount onAdd={add} stock={item.stock} item={item} />
            </div>
        </>
    );
};

export default ItemDetail;
