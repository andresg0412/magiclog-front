import React, { useEffect, useState } from 'react';
import "./TableComponent.css";


const TableComponent = ({ productsList }) => {
    return (
        <>
            <h2>Inventario</h2>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>SKU</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsList && productsList.length > 0 ? (
                            productsList.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.SKU}</td>
                                </tr>
                            ))) : (
                            <tr>
                                <td colSpan="4">No hay productos</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default TableComponent;