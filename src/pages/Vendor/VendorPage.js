import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import MenuVendorComponent from "../../components/Menu/MenuVendorComponent";
import ButtonComponent from "../../components/Button/ButtonComponent";
import './VendorPage.css';
import { check } from '../../services/authService';
import { useSelector, useDispatch } from 'react-redux';
import { logoutSuccess } from '../../redux/reducers/authReducer';
import { logout } from "../../services/authService";
import { useNavigate } from 'react-router-dom';
import { getProductByVendor } from "../../services/productService";
import TableComponent from "../../components/Table/TableComponent";

const VendorPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isAutorized, setIsAuthorized] = useState(false);
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        localStorage.getItem('role') === 'vendor' ? setIsAuthorized(true) : setIsAuthorized(false);
    }, [isAutorized]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProductByVendor();
                setProductsList(response);
            } catch (error) {
                console.error('Error fetching products:', error);
                throw error;
            }
        }

        fetchProducts();
    }, []);
    const handleLogout = async () => {
        try {
            localStorage.removeItem('role');
            const user = await logout();
            navigate('/login');
            dispatch(logoutSuccess(user));
            
        }
        catch (error) {
            console.error('Error during logout:', error);
            throw error;
        }
    }

    if (!isAutorized) {
        return (
            <h1>NO ESTAS AUTORIZADO PARA ENTRAR A ESTA PAGINA</h1>
        );
    }
    return (
        <>
            <HeaderComponent />
            <div className="container">
                <div className="side-left">
                    <MenuVendorComponent />
                    <ButtonComponent
                        text="Cerrar Sesion"
                        onClick={handleLogout}
                        classname="button"
                        type="button" />
                </div>

                <div className="side-right">
                    <ButtonComponent
                        text="Crear"
                        onClick={() => { }}
                        classname="button primary"
                        type="button" />

                    <TableComponent
                        productsList={productsList}/>
                
                </div>

            </div>
        </>
    );
};

export default VendorPage;