import React from "react";

const FormCreateProduct = ({ ...props }) => {
    return (
        <>

            <div className="container_form">
                <div className="form">
                    <div>
                        <h2>Crear Producto</h2>
                        <form onSubmit={props.handleCreateProduct}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Escriba el nombre del producto"
                                    value={props.name}
                                    onChange={(e) => props.setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Precio</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="price"
                                    placeholder="Escriba el precio del producto"
                                    value={props.price}
                                    onChange={(e) => props.setPrice(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="quantity">Cantidad</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="quantity"
                                    placeholder="Escriba la cantidad"
                                    value={props.quantity}
                                    onChange={(e) => props.setQuantity(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="sku">SKU</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="sku"
                                    placeholder="Escriba SKU"
                                    value={props.SKU}
                                    onChange={(e) => props.setSku(e.target.value)}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Crear
                            </button>
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
};

export default FormCreateProduct;