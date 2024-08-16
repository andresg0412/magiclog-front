import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import MenuVendorComponent from "../../components/Menu/MenuVendorComponent";
import ButtonComponent from "../../components/Button/ButtonComponent";
import './VendorPage.css';

const VendorPage = () => {
    return (
        <>
        <HeaderComponent />
        <div className="container">
                <div className="side-left">
                    <MenuVendorComponent />
                </div>

                <div className="side-right">
                    <ButtonComponent
                        text="Crear"
                        onClick={() => { }}
                        classname="button primary"
                        type="button" />

                    
                </div>

            </div>
        </>
    );
};

export default VendorPage;