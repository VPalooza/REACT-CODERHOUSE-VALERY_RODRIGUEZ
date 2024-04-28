import React, { useEffect, useState, useContext } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import  ItemDetail  from "./ItemDetail";
import { getDoc, doc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null); 

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const refDoc = doc(db, "items", id);

        getDoc(refDoc).then((snapshot) => {
            setItem({ id: snapshot.id, ...snapshot.data() }); 
        });
    }, [id]);

    if (!item) return null;

    return <ItemDetail item={item} />; 
};

export default ItemDetailContainer;
