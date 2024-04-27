import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../App.css";

export const Item = ({product}) => {
    return (
        <Card>
            <Card.Img variant="top" src={product.imagen} />
            <Card.Body>
                <Card.Title>{product.titulo}</Card.Title>
                <Card.Text>
                    {product.descripcion}
                </Card.Text>
                <Card.Text>
                    {product.categoria}
                </Card.Text>
                <Link to={`/item/${product.id}`}><Button variant="primary">Ver detalles</Button></Link>
            </Card.Body>
        </Card>
    );
};

