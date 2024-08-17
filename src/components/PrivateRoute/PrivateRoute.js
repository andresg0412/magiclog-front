import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { check } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ element, ...rest }) => {
    const dispatch = useDispatch();
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const userAuth = async () => {
            try {
                const user = await check(dispatch);
            } catch(error) {
                if (error.response && error.response.status === 401) {
                    // Si el error es 401 (no autorizado), redirigimos a la página de login
                    navigate('/login');
                } else {
                    console.error('Error de autenticación:', error);
                    // Manejo de otros errores si es necesario
                }
            }
            finally {
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
