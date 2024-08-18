import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import SearchComponent from "../../components/Search/SearchComponent";
import FilterComponent from "../../components/Search/FilterComponent";
import ListComponent from "../../components/List/ListComponent";
import "./HomePage.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProducts } from "../../services/productService";
import { setProducts } from "../../redux/reducers/productReducer";
import ModalRegister from "../../components/Modal/ModalRegister";

const HomePage = () => {
    const products = useSelector((state) => state.products.items);
    const dispatch = useDispatch();
    const [productsList, setProductsList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(400000);
    const [openModalRegister, setOpenModalRegister] = useState(false);

    //OBTENER PRODUCTOS DE API
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


    //FUNCIONALIDAD PARA BUSCADOR
    useEffect(() => {
        if (searchTerm === '') {
            setProductsList(products); // Resetear lista de productos si no hay término de búsqueda
        } else {
            const filteredProducts = products.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setProductsList(filteredProducts); // Actualizar lista de productos filtrados
        }
    }, [searchTerm, products]);

    //CONTROLADORES DE INPUT RANGO
    const handleMinFilterChange = (minValue) => {
        setMinPrice(minValue);
    };
    const handleMaxFilterChange = (maxValue) => {
        setMaxPrice(maxValue);
    };
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleCloseModal = () => {
        setOpenModalRegister(false);
    };

    return (
        <>
            <HeaderComponent
                setOpenModalRegister={setOpenModalRegister}
            />
            <div className="container">
                <div className="side-left">
                    <FilterComponent
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        minFilterChange={handleMinFilterChange}
                        maxFilterChange={handleMaxFilterChange}
                    />
                </div>
                <div className="side-right">
                    <SearchComponent
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleChange={handleChange}
                    />
                    <ListComponent
                        items={productsList} />
                </div>

            </div>
            {openModalRegister ? (
                <ModalRegister
                    handleCloseModal={handleCloseModal}
                />
            ) : (
                <></>
            )}
        </>
    )
}

export default HomePage;