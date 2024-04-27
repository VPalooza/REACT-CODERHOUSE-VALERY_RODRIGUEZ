import React, { useEffect, useState, useContext } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { getDoc, doc, query, where } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, "items", id);

        getDoc(refDoc).then((snapshot) => {
            setProduct({ id: snapshot.id, ...snapshot.data() });
        });
    }, [id]);

    if (!product) return null;

    return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
