import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FilterByVendor from "../../components/Search/FilterByVendor";
import ListComponent from "../../components/List/ListComponent";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProducts } from "../../services/productService";
import { setProducts } from "../../redux/reducers/productReducer";
import { getVendors } from "../../services/adminServices";
import styles from "./AdminPage.module.css";

const AdminPage = () => {
    const [isAutorized, setIsAuthorized] = useState(false);
    const products = useSelector((state) => state.products.items);
    const dispatch = useDispatch();
    const userEmail = sessionStorage.getItem('email');
    const [productsList, setProductsList] = useState([]);
    const [vendors, setVendors] = useState([]);
    const [selectedVendors, setSelectedVendors] = useState([]);
    const [searchingVendor, setSearchingVendor] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isAdmin, setIsAdmin] = useState(true);


    //VERIFICAR SI EL USUARIO ES ADMIN
    useEffect(() => {
        sessionStorage.getItem('role') === 'admin' ? setIsAuthorized(true) : setIsAuthorized(false);
    }, [isAutorized]);

    //OBTENER LISTADO DE VENDEDORES
    useEffect(() => {
        const fetchVendors = async () => {
            var response = []
            try {
                response = await getVendors();

            } catch (error) {
                console.log(error);
            } finally {
                setVendors(response);
                setSearchingVendor(false);
            }
        }

        fetchVendors();
    }, []);

    //OBTENER LISTADO DE PRODUCTOS
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await getProducts();
                dispatch(setProducts(response));
                setProductsList(response);
                setFilteredProducts(response);
            } catch (error) {
                console.log(error);
            }
        }

        fetchProducts();
    }, [dispatch]);


    //FILTRAR PRODUCTOS
    useEffect(() => {
        const filtered = products.filter((product) =>
            selectedVendors.length === 0 || selectedVendors.includes(product.vendorId)
        );
        setFilteredProducts(filtered);
        setProductsList(filtered);
    }, [products, selectedVendors]);

    //FUNCION PARA SELECCIONAR VENDEDORES
    const handleCheckboxChange = (vendorId) => {
        if (selectedVendors.includes(vendorId)) {
            setSelectedVendors(selectedVendors.filter((id) => id !== vendorId));
        } else {
            setSelectedVendors([...selectedVendors, vendorId]);
        }
    };

    if (!isAutorized) {
        return (
            <h1>NO ESTAS AUTORIZADO PARA ENTRAR A ESTA PAGINA</h1>
        );
    }
    return (
        <>
            <HeaderComponent
                role="admin"
                email={userEmail}
            />
            <div className={styles.container_admin}>
                <div className={styles.side_left_admin}>
                    {searchingVendor ? (
                        <p>Buscando...</p>
                    ) : (
                        <FilterByVendor
                            vendors={vendors}
                            handleCheckboxChange={handleCheckboxChange}
                            selectedVendors={selectedVendors}
                        />
                    )}

                </div>

                <div className={styles.side_right_admin}>
                    <ListComponent
                        items={productsList}
                        isAdmin={isAdmin} />
                </div>

            </div>
        </>
    );
};

export default AdminPage;