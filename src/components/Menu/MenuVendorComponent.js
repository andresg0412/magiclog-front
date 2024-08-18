import React from "react";
import styles from "./MenuVendorComponent.module.css";
import { Link } from "react-router-dom";

const MenuVendorComponent = () => {
    return (
        <>
            <div className={styles.menu_vendor}>
                <ul>
                    <li><Link href="/vendor">Dashboard</Link></li>
                    <li><Link href="/vendor">Cotizaciones</Link></li>
                    <li><Link href="/vendor">Ordenes</Link></li>
                    <li><Link href="/vendor">Inventario</Link></li>
                </ul>
            </div>
        </>
    );
};

export default MenuVendorComponent;