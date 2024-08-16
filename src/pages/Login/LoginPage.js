import React from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormLogin from "../../components/Login/FormLogin";
import "./LoginPage.css";
import { login } from "../../services/authService";
import { loginSuccess } from "../../redux/reducers/authReducer";



const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const confirmPassword = false;

    const handleLogin = async (e, email, password) => {
        e.preventDefault();
        try{
            const user = await login({ email, password });
            dispatch(loginSuccess(user));

            if (user.role === 'admin') {
                navigate('/admin');
            } else if (user.role === 'vendor') {
                navigate('/vendor');
            }
        }
        catch(error){
            console.error('Error during login:', error);
            throw error;
        }
    }


    return (
        <>
            <div className="container-login">
                <FormLogin
                    handle={handleLogin}
                    confirmPassword={confirmPassword}
                    title="Iniciar Sesión"
                    button="Iniciar Sesión"
                />
            </div>
        </>
    );
};

export default LoginPage;