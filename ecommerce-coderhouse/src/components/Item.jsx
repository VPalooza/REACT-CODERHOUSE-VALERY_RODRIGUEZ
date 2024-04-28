import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount"; // Importar el componente ItemCount
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "../App.css";

export const Item = ({ product }) => {
    const { addShop } = useContext(CartContext); // Obtener la función addShop del contexto del carrito

    const addToCart = (quantity) => {
        addShop(product, quantity); // Llamar a la función addShop con el producto y la cantidad
    };

    return (
        <div className="item-wrapper">
            <Card className="card-item">
                <div className="img-wrapper">
                    <Card.Img className="card-img" src={product.imagen} />
                </div>
                <Card.Body className="card-body">
                    <Card.Title className="item-title-text">{product.titulo}</Card.Title>
                    <Card.Text className="item-description-text">{product.descripcion}</Card.Text>
                    <Card.Text className="item-category-text">{product.categoria}</Card.Text>
                    <ItemCount
                        onAdd={addToCart}
                        stock={product.stock}
                        item={product}
                    />
                    <Link to={`/item/${product.id}`}>
                        <Button className="details-button">Ver detalles</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};
