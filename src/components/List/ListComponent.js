import React from "react";
import Product from "./ProductComponent";
import "./ListComponent.css";

const ListComponent = ({ items }) => {
    return (
        <div>
            <h1>List Component</h1>
            {items && items.length > 0 ? (
                items.map((item) => (
                    <Product
                        key={item.id}
                        item={item} />
                ))
            ): (
                <p>No hay productos</p>
            )}
        </div>
    );
};

export default ListComponent;