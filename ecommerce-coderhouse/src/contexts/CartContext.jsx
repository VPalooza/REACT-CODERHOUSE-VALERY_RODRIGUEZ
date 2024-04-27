import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [itemCart, setCart] = useState([]);

    const clearShop = () => setCart([]);
    const addShop = (item, quantity) => {
        const exist = itemCart.some((i) => i.id === item.id);

        if (exist) {
            const addItem = itemCart.map((product) => {
                if (product.id === items.id) {
                    return {
                        ...product,
                        quantity: product.quantity + quantity,
                    };
                } else {
                    return product;
                }
            });
            setCart(addItem);
        } else {
            setCart((prev) => {
                return [...prev, { ...item, quantity }];
            });
        }
    };
    const minusShop = (id) => {
        const index = itemCart.findIndex((item) => item.id === id);
        if (index !== -1) {
            const updatedShop = [...cart];
            updatedShop[index].quantity -= 1;
            if (updatedShop[index].quantity === 0) {
                updatedShop.splice(index, 1);
            }
            setCart(updatedShop);
        }
    };

    return (
        <CartContext.Provider value={{ itemCart, clearShop, addShop, minusShop }}>
            {children}
        </CartContext.Provider>
    );
};
