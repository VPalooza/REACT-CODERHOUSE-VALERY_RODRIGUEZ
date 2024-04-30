import React, { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faCartPlus, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

export const ItemCount = ({ onAdd, stock, item }) => {
    const [count, setCount] = useState(0);
    const { itemCart } = useContext(CartContext);
    const [showNoItemsError, setShowNoItemsError] = useState(false);

    const handleCountChange = (event) => {
        const inputValue = event.target.value;
        if (!isNaN(inputValue) && parseInt(inputValue) <= stock) {
            setCount(parseInt(inputValue));
        }
    };

    const handleUp = () => {
        if (stock > count) {
            setCount(count + 1);
        }
    };

    const handleDown = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const upAdd = () => {
        if (count === 0 && !isItemInCart) {
            setShowNoItemsError(true);
            return;
        }

        const existingItem = itemCart.find(
            (cartItem) => cartItem.id === item.id
        );
        const quantityToAdd =
            count - (existingItem ? existingItem.quantity : 0);
        onAdd(quantityToAdd);

        toast.success(
            `Se agregaron ${quantityToAdd} ${
                quantityToAdd === 1 ? "unidad" : "unidades"
            } de ${item.titulo} al carrito`,
            {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }
        );
    };

    const isItemInCart = itemCart.some((cartItem) => cartItem.id === item.id);
    const quantityInCart = isItemInCart
        ? itemCart.find((cartItem) => cartItem.id === item.id).quantity
        : 0;

    return (
        <div className="count-wrapper">
            <div className="button-count-wrapper">
                <button onClick={handleDown}>
                    <FontAwesomeIcon className="count-icon" icon={faMinus} style={{ backgroundColor: 'transparent' }}/>
                </button>
                <input
                    className="input-count"
                    type="number"
                    value={count}
                    onChange={handleCountChange}
                    min="0"
                    max={stock}
                />
                <button onClick={handleUp}>
                    <FontAwesomeIcon className="count-icon" icon={faPlus} style={{ backgroundColor: 'transparent' }} />
                </button>
                <button
                    onClick={upAdd}
                >
                    Agregar al carrito <FontAwesomeIcon className="add-cart-icon" icon={faCartPlus} style={{ backgroundColor: 'transparent' }}/>
                </button>
            </div>
            {isItemInCart && (
                <p className="notification-popup">
                    <FontAwesomeIcon icon={faCircleExclamation} />  Ya llevas {quantityInCart} unidad/es de este item
                </p>
            )}
            {showNoItemsError && count === 0 && !isItemInCart && (
                <p className="notification-popup shake">
                    <FontAwesomeIcon icon={faCircleExclamation} />  Debes agregar al menos un producto
                </p>
            )}
            
        </div>
    );
};
