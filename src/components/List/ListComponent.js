import React from "react";
import Product from "./ProductComponent";
import "./ListComponent.css";

const ListComponent = ({ items, isAdmin }) => {
    return (
        <div className="listComponent_container">
            <h1>Productos</h1>
            <div className="list_container">
            {items && items.length > 0 ? (
                items.map((item) => (
                    <Product
                        key={item.id}
                        item={item}
                        isAdmin={isAdmin}/>
                ))
            ): (
                <p>No hay productos</p>
            )}
            </div>
        </div>
    );
};

export default ListComponent;