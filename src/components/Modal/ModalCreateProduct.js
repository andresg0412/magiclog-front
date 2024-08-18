import React, { useState } from "react";
import FormCreateProduct from "../Login/FormCreateProduct";
import { createProduct } from "../../services/productService";

const ModalCreateProduct = ({ handleCloseModal, handleIsCreated }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [SKU, setSku] = useState("");

    const handleCreateProduct = async (e) => {
        e.preventDefault();
        try{
            const response = await createProduct({ name, price, quantity, SKU });
            
        }catch(error){
            console.error('Error creating product:', error);
            throw error;
        }finally{
            handleIsCreated();
        }

    };
    return (
        <>
            <div className="container_modal_create">
                <div className="modal_create">
                    <span class="close-button" onClick={handleCloseModal}>&times;</span>
                    <FormCreateProduct
                        name={name}
                        setName={setName}
                        price={price}
                        setPrice={setPrice}
                        setQuantity={setQuantity}
                        setSku={setSku}
                        quantity={quantity}
                        SKU={SKU}
                        handleCreateProduct={handleCreateProduct}
                    />
                </div>

            </div>
        </>
    );
};

export default ModalCreateProduct;