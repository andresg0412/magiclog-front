import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormLogin from "../../components/Login/FormLogin";
import "./LoginPage.css";
import { login } from "../../services/authService";
import { loginSuccess } from "../../redux/reducers/authReducer";
import ModalAlerta from "../../components/Modal/ModalAlerta";



const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const confirmPassword = false;
    const [isError, setIsError] = useState(false);

    const handleLogin = async (e, email, password) => {
        e.preventDefault();
        try {
            const user = await login({ email, password });
            dispatch(loginSuccess(user));
            sessionStorage.setItem('role', user.role);
            sessionStorage.setItem('email', email);
            if (user.role === 'admin') {
                navigate('/admin');
            } else if (user.role === 'vendor') {
                navigate('/vendor');
            }
        }
        catch (error) {
            if (error.response && (error.response.status === 401 || error.response.status === 400)) {
                setIsError(true);
            }
        }
    };


    return (
        <>
            <div className="container-login">
                <FormLogin
                    handle={handleLogin}
                    confirmPassword={confirmPassword}
                    title="Iniciar Sesión"
                    button="Iniciar Sesión"
                />
                {isError ? (
                    <ModalAlerta
                        title="Error"
                        message="Credenciales incorrectas"
                        button="Volver"
                        handleCloseModal={() => setIsError(false)}
                    />
                ) : (
                    <></>
                )}
            </div>
        </>
    );
};

export default LoginPage;