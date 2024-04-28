import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import Swal from "sweetalert2"; // Importa SweetAlert2
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const initialValues = {
    name: "",
    phone: "",
    email: "",
};

export const Checkout = () => {
    const [buyer, setBuyer] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [cartEmpty, setCartEmpty] = useState(false);
    const [processingOrder, setProcessingOrder] = useState(false);
    const { clearShop, itemCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleChange = (ev) => {
        const { value, name } = ev.target;
        setBuyer((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validate = () => {
        let isValid = true;
        const errors = {};

        if (buyer.name.replace(/\s/g, "").length < 15) {
            errors.name =
                " ¡Un momento! ✋ Por favor, ingrese los datos requeridos";
            isValid = false;
        }

        if (!/^\d{5,}$/.test(buyer.phone)) {
            errors.phone =
                " ¡Un momento! ✋ Por favor, ingrese los datos requeridos";
            isValid = false;
        }

        if (!/^\S+@\S+\.\S+$/.test(buyer.email)) {
            errors.email =
                " ¡Un momento! ✋ Por favor, ingrese una dirección de correo electrónico válida";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const total = itemCart.reduce(
        (acu, act) => acu + act.precio * act.stock,
        0
    );

    const handleOrder = async () => {
        if (!validate()) {
            document.querySelector(".checkout-form").classList.add("shake");
            setTimeout(() => {
                document
                    .querySelector(".checkout-form")
                    .classList.remove("shake");
            }, 500);
            return;
        }

        setProcessingOrder(true);

        const order = {
            buyer: buyer,
            items: itemCart,
            total: total,
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");

        try {
            const { id } = await addDoc(ordersCollection, order);

            if (id) {
                Swal.fire({
                    icon: "success",
                    title: "¡Orden realizada con éxito!",
                    text: `ID de compra: ${id}`,
                    confirmButtonText: "Aceptar",
                }).then(() => {
                    navigate("/");
                    clearShop();
                });
            }
        } catch (error) {
            console.error("Error al agregar documento: ", error);
            setProcessingOrder(false);
        }
    };

    const handleClearShop = () => {
        clearShop();
        setCartEmpty(true);
    };

    return (
        <Container className="mt-4">
            <div className="container-checkout">
                {itemCart.length === 0 && cartEmpty && (
                    <div className="carrito-vacio">
                        <p>Tu carrito está vacío. 🙁</p>
                        <Link to="/">
                            <button>Volver a la tienda</button>
                        </Link>
                    </div>
                )}
                <div className="carrito-datos-total">
                    <h1>Carrito</h1>
                    {itemCart.length > 0 && (
                        <div>
                            <div className="table-container">
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
                                                <img
                                                    src={item.imagen}
                                                    alt={item.titulo}
                                                />
                                            </td>
                                            <td>{item.quantity}</td>
                                            <td>{item.precio}</td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        clearShop(item.id)
                                                    }
                                                >
                                                    eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            </div>
                            <Link to="/">
                                <button>Seguir comprando</button>
                            </Link>
                            <button onClick={handleClearShop}>
                                vaciar carrito
                            </button>
                        </div>
                    )}
                </div>
                {itemCart.length > 0 && !processingOrder && (
                    <div className="form-checkout">
                        <h2>Datos</h2>
                        <form
                            className={`checkout-form ${
                                Object.keys(errors).length > 0 ? "shake" : ""
                            }`}
                        >
                            <div>
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    value={buyer.name}
                                    name="name"
                                    onChange={handleChange}
                                />
                                {errors.name && (
                                    <div className="error-form-text">
                                        {errors.name}
                                    </div>
                                )}
                            </div>
                            <div>
                                <label>Número telefónico</label>
                                <input
                                    type="text"
                                    value={buyer.phone}
                                    name="phone"
                                    onChange={handleChange}
                                    pattern="[0-9]*"
                                />
                                {errors.phone && (
                                    <div className="error-form-text">
                                        {errors.phone}
                                    </div>
                                )}
                            </div>
                            <div>
                                <label>Email</label>
                                <input
                                    type="email"
                                    value={buyer.email}
                                    name="email"
                                    onChange={handleChange}
                                />
                                {errors.email && (
                                    <div className="error-form-text">
                                        {errors.email}
                                    </div>
                                )}
                            </div>
                        </form>
                        <button type="button" onClick={handleOrder}>
                            Comprar
                        </button>
                    </div>
                )}
                {processingOrder && (
                    <div className="loader-checkout">Procesando...</div>
                )}
            </div>
            <footer className="footer-index">hecho con amorcito</footer>
        </Container>
    );
};
