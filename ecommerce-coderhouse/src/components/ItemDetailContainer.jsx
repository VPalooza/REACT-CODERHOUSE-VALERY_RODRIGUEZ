import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/products.json";
import Container from "react-bootstrap/Container";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const getProducts = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(data);
                }, 2000);
            });
        };

        getProducts().then((data) => { 
                const filteredData = data.find((d) => d.id === Number (id));
                setProduct(filteredData);      
        });
    }, [id]);

    if (!product) return null;

    return (
        <Container className="mt-4">
            <div>{product.name}</div>
            <img src={product.img} alt={product.name}/>
        </Container>
    );
};

export default ItemDetailContainer;
