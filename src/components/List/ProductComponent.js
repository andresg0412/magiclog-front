import React from 'react';
import './ProductComponent.css';

const Product = ({ item }) => {
    return (
        <div className="product-card">
            <h2 className="product-name">{item.name}</h2>
            <p>$ {item.price}</p>
            <button onClick={() => { }} className="add-to-cart">
                Agregar al carrito
            </button>
        </div>
    );
};

export default Product;
