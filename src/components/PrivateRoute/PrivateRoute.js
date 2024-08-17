import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { check } from '../../services/authService';

const PrivateRoute = ({ element, ...rest }) => {
    const dispatch = useDispatch();
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    useEffect(() => {
        const userAuth = async () => {
            try {
                const user = await check(dispatch);
                console.log('CREDENCIALES ENCONTRADAS')
                console.log(user)
            } finally {
                setIsCheckingAuth(false);  // Una vez completado, cambiamos el estado
            }
        };

        userAuth();

    }, [dispatch]);

    const isAuthenticated = useSelector((state) => !isCheckingAuth && state.auth.isAuthenticated);

    if (isCheckingAuth) {
        return <div>Verificando autenticación...</div>; // Opcional: Mostrar algún mensaje de carga
    }
    
    return isAuthenticated ? element : <Navigate to="/login" />
};

export default PrivateRoute;
