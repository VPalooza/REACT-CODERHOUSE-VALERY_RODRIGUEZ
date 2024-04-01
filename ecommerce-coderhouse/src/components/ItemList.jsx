
import React from 'react';
import { Item } from './Item';

export const ItemList = ({ products }) => {
    return products.map(product => <Item key={product.name} product={product} />);
}
