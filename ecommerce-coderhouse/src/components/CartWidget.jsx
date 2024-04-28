import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

export const CartWidget = () => {
    const { itemCart } = useContext(CartContext);

    const totalProducts = itemCart.reduce(
        (total, product) => total + product.quantity,
        0
    );

    if (!totalProducts) return null;

    return (
        <Link to="/checkout">
            <div className="cart-market">
                <FontAwesomeIcon icon={faShoppingCart} />
                <strong className="cartWidget-total">{totalProducts}</strong>
            </div>
        </Link>
    );
};
