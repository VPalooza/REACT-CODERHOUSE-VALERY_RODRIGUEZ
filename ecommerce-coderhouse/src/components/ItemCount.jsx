import { useState } from "react";
import "../App.css";

export const ItemCount = ({ onAdd, stock }) => {
    const [count, setCount] = useState(1);

    const handleUp = () => {
        if (stock > count) {
            setCount(count + 1);
        }
    };

    const handleDown = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const upAdd = () => {
            setCount(1);
            onAdd(count);
    };

    return (
        <div>
            <mark className="down down-index" onClick={handleDown}>-</mark>
            <input value={count} readOnly />
            <mark onClick={handleUp}>+</mark>
            <button onClick={upAdd}>Agregar al carrito</button>
        </div>
    );
};
