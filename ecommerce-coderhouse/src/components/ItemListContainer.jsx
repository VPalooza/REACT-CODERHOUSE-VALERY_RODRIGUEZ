import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList"; 
import data from "../data/products.json";
import Container from "react-bootstrap/Container";


export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getProducts = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(data);
                }, 2000);
            });
        };

        getProducts().then((data) => {
            if (id) {
                const filteredData = data.filter((d) => d.category.toLowerCase() === id);
                setProducts(filteredData);
            } else {
                setProducts(data);
            }
        });
    }, [id]);

    return (
        <Container className="mt-4">
            <ItemList products={products} />
        </Container>
    );
};
