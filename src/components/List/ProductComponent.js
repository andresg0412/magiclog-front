import React from 'react';
import './ProductComponent.css';

const Product = () => {
    return (
        <div className="product-card">
            <h2 className="product-name">Nombre Producto</h2>
            <p>$ Precio producto</p>
            <button onClick={() => { }} className="add-to-cart">
                Agregar al carrito
            </button>
        </div>
    );
};

export default Product;
