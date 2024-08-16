import React from "react";
import FormLogin from "../../components/Login/FormLogin";
import "./LoginPage.css";
const RegisterPage = () => {
    return (
        <>
            <div className="container-login">
                <FormLogin
                    title="Formulario de registro"
                    button="Registrate"
                />
            </div>
        </>
    );
};

export default RegisterPage;