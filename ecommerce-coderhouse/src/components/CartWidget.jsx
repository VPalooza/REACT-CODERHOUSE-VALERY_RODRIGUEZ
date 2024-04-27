import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import cartImg from "../assets/cart-icon.svg";
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
                <img src={cartImg} alt="" className="imagen" />
                <strong className="cartWidget-total">{totalProducts}</strong>
            </div>
        </Link>
    );
};
