import React from "react";
import FormLogin from "../../components/Login/FormLogin";
import "./LoginPage.css";
const LoginPage = () => {
    return (
        <>
            <div className="container-login">
                <FormLogin
                    title="Iniciar Sesión"
                    button="Iniciar Sesión"
                />
            </div>
        </>
    );
};

export default LoginPage;