import Container from "react-bootstrap/Container";
import "../App.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
    getFirestore,
    doc,
    updateDoc,
    collection,
    addDoc,
} from "firebase/firestore";
import { CartContext } from "../contexts/CartContext";

const initialValues = {
    name: "",
    phone: "",
    email: "",
};

export const Checkout = () => {
    const [buyer, setBuyer] = useState(initialValues);
    const { clearShop, itemCart } = useContext(CartContext);

    const handleChange = (ev) => {
        const { value, name } = ev.target;
        setBuyer((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const total = itemCart.reduce(
        (acu, act) => acu + act.precio * act.stock,
        0
    );
    const handleOrder = () => {
        const order = {
            buyer: buyer,
            items: itemCart,
            total: total,
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, order)
            .then(({ id }) => {
                if (id) {
                    alert(
                        "Tu orden fue realizada con éxito. ID de compra: " + id
                    );
                }
            })
            .catch((error) => {
                console.error("Error al agregar documento: ", error);
            });
    };

    return (
        <Container className="mt-4">
            <h1>Carrito</h1>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Imagen</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {itemCart.map((item) => (
                        <tr key={item.id}>
                            <td>{item.titulo}</td>
                            <td>
                                <img src={item.imagen} alt={item.titulo} />
                            </td>
                            <td>{item.quantity}</td>
                            <td>{item.precio}</td>
                            <td>
                                <button
                                    onClick={() => clearShop(item.id)}
                                    Eliminar
                                ></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/">
                <button>Seguir comprando</button>
            </Link>
            <button onClick={clearShop}>vaciar carrito</button>

            <h2>Datos</h2>
            <form>
                <div>
                    <label>Nombre</label>
                    <input
                        type="text"
                        value={buyer.name}
                        name="name"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Número telefónico</label>
                    <input
                        type="numero"
                        value={buyer.phone}
                        name="phone"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={buyer.email}
                        name="email"
                        onChange={handleChange}
                    />
                </div>
            </form>
            <button type="button" onClick={handleOrder}>
                Comprar
            </button>
            <footer className="footer-index">hecho con amorcito</footer>
        </Container>
    );
};
