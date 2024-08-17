import React, { useEffect, useState } from 'react';

const TableComponent = ({ productsList }) => {
    return (
        <>
            <h2>Inventario</h2>
            <table>
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
                                <td>{product.sku}</td>
                            </tr>
                        ))) : (
                            <tr>
                                <td colSpan="4">No hay productos</td>
                            </tr>
                        )}
                </tbody>
            </table>
        </>
    );
};

export default TableComponent;