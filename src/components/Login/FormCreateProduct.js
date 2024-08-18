import React from "react";
import styles from "./FormCreateProduct.module.css";
import ButtonComponent from "../Button/ButtonComponent";

const FormCreateProduct = ({ ...props }) => {
    return (
        <>

            <div className="container_form">
                <div className="form">
                    <div>
                        <h2>Crear Producto</h2>
                        <form onSubmit={props.handleCreateProduct}>
                            <div className={styles.form_group}>
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    className={styles.form_control}
                                    id="name"
                                    placeholder="Escriba el nombre del producto"
                                    value={props.name}
                                    onChange={(e) => props.setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.form_group}>
                                <label htmlFor="price">Precio</label>
                                <input
                                    type="text"
                                    className={styles.form_control}
                                    id="price"
                                    placeholder="Escriba el precio del producto"
                                    value={props.price}
                                    onChange={(e) => props.setPrice(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.form_group}>
                                <label htmlFor="quantity">Cantidad</label>
                                <input
                                    type="number"
                                    className={styles.form_control}
                                    id="quantity"
                                    placeholder="Escriba la cantidad"
                                    value={props.quantity}
                                    onChange={(e) => props.setQuantity(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.form_group}>
                                <label htmlFor="sku">SKU</label>
                                <input
                                    type="number"
                                    className={styles.form_control}
                                    id="sku"
                                    placeholder="Escriba SKU"
                                    value={props.SKU}
                                    onChange={(e) => props.setSku(e.target.value)}
                                    required
                                />
                            </div>

                            <ButtonComponent
                                text="Crear"
                                classname="button registro"
                                type="submit"
                            />

                        </form>
                    </div>
                </div>

            </div>

        </>
    )
};

export default FormCreateProduct;