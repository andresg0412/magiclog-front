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
import ModalCreateProduct from "../../components/Modal/ModalCreateProduct";
import ModalAlerta from "../../components/Modal/ModalAlerta";

const VendorPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userEmail = sessionStorage.getItem('email');
    const [isAutorized, setIsAuthorized] = useState(false);
    const [productsList, setProductsList] = useState([]);
    const [noProducts, setNoProducts] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [isCreated, setIsCreated] = useState(false);

    //VERIFICAR SI ESTA AUTORIZADO
    useEffect(() => {
        sessionStorage.getItem('role') === 'vendor' ? setIsAuthorized(true) : setIsAuthorized(false);
    }, [isAutorized]);

    //OBTENER PRODUCTOS DEL VENDEDOR LOGUEADO

    const fetchProducts = async () => {
        try {
            const response = await getProductByVendor();
            if (response.length === 0) {
                setNoProducts(true);
            } else {
                setProductsList(response);
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setNoProducts(true);
            } else {
                console.error('Error fetching products:', error);
                throw error;
            }
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    //CERRAR SESION
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

    //CREAR PRODUCTO CON MODAL
    const handleOpenModalCreateProduct = () => {
        setIsCreating(true);
    }

    const handleIsCreated = () => {
        setIsCreating(false);
        fetchProducts();
        setIsCreated(true);
    }

    if (!isAutorized) {
        return (
            <h1>NO ESTAS AUTORIZADO PARA ENTRAR A ESTA PAGINA</h1>
        );
    }
    return (
        <>
            <HeaderComponent
                role="Vendedor"
                email={userEmail}
            />
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
                        onClick={handleOpenModalCreateProduct}
                        classname="button primary"
                        type="button" />

                    {noProducts ? (
                        <p>No hay productos</p>
                    ) : (
                        <TableComponent
                            productsList={productsList} />
                    )}


                </div>

            </div>
            {isCreating ? (
                <ModalCreateProduct
                    handleCloseModal={() => setIsCreating(false)}
                    handleIsCreated={handleIsCreated}
                />
            ) : null}
            {isCreated ? (
                <ModalAlerta
                    title="Creado con exito"
                    text="Se ha creado el producto con exito"
                    button="Aceptar"
                    handleCloseModal={() => setIsCreated(false)}
                />
            ) : null}
        </>
    );
};

export default VendorPage;