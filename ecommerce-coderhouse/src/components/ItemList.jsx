
import React from 'react';
import { Item } from './Item';
import "../App.css";

export const ItemList = ({ products }) => {
    return products.map(product => <Item key={product.category} product={product} />);
}
