import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";


const AdminPage = () => {
    const [isAutorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        localStorage.getItem('role') === 'admin' ? setIsAuthorized(true) : setIsAuthorized(false);
    }, [isAutorized]);

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
                </div>

                <div className="side-right">

                    
                </div>

            </div>
        </>
    );
};

export default AdminPage;