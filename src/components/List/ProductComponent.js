import React from 'react';
import './ProductComponent.css';
import ButtonComponent from '../Button/ButtonComponent';

const Product = ({ item, isAdmin }) => {
    return (
        <div className="product-card">
            <h2 className="product-name">{item.name}</h2>
            <p className='product-sku'>SKU: {item.SKU}</p>
            <p className='product-price'>$ {item.price}</p>
            {isAdmin ? (
                null
            ) : (
                <ButtonComponent
                    text="Agregar al carrito"
                    onClick={() => { }}
                    classname={"add-to-cart"}
                    type="button"
                />
            )}

        </div>
    );
};

export default Product;
