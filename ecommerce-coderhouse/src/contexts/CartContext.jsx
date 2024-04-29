import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [itemCart, setCart] = useState([]);

    const clearShop = () => setCart([]);
    const addShop = (item, quantity) => {
        const existingItemIndex = itemCart.findIndex((i) => i.id === item.id);

        if (existingItemIndex !== -1) {
            const updatedCart = [...itemCart];
            updatedCart[existingItemIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart((prevCart) => [...prevCart, { ...item, quantity }]);
        }
    };

    const minusShop = (id) => {
        const index = itemCart.findIndex((item) => item.id === id);
        if (index !== -1) {
            const updatedShop = [...itemCart];
            updatedShop[index].quantity -= 1;
            if (updatedShop[index].quantity === 0) {
                updatedShop.splice(index, 1);
            }
            setCart(updatedShop);
        }
    };

    const removeItem = (id) => {
        setCart(itemCart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider
            value={{ itemCart, clearShop, addShop, minusShop, removeItem }}
        >
            {children}
        </CartContext.Provider>
    );
};
