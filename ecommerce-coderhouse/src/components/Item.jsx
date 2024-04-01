import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const Item = ({product}) => {
    return (
        <Card>
            <Card.Img variant="top" src={product.pictureURL} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
                <Card.Text>
                    {product.category}
                </Card.Text>
                <Link to={`/item/${product.id}`}><Button variant="primary">Go somewhere</Button></Link>
            </Card.Body>
        </Card>
    );
};

