import React, { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import {
    getFirestore,
    getDocs,
    query,
    where,
    collection,
} from "firebase/firestore";
import Container from "react-bootstrap/Container";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        let refCollection;

        if (!id) refCollection = collection(db, "items");
        else {
            refCollection = query(
                collection(db, "items"),
                where("categoria", "==", id)
            );
        }

        getDocs(refCollection).then((snapshot) => {
            setProducts(
                snapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                })
            );
        })
        .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <h1>Cargando...</h1>;

    return (
        <Container fluid ="sm" className="item-list-container" >
            <ItemList products={products} />
            <footer className="footer-index">hecho con amorcito</footer>
        </Container>
    );
};
