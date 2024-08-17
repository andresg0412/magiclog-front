import React, { useState } from "react";
import FormLogin from "../../components/Login/FormLogin";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/authService";
import ModalAlerta from "../../components/Modal/ModalAlerta";


const RegisterPage = () => {
    const role = 'vendor';
    const confirmPassword = true;
    const navigate = useNavigate();
    const [isRegistredSuccessfully, setIsRegistredSuccessfully] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isDuplicate, setIsDuplicate] = useState(false);

    const handleRegister = async (e, email, password) => {
        e.preventDefault();
        try {
            const user = await register({ email, password, role });
            if (user.message) {
                setIsDuplicate(true);
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setIsDuplicate(true);
                console.error('Error during registration:', error);
            } else {
                console.error('Error during registration:', error);
                throw error;
            }

        } finally {
            if (isDuplicate) {
                setIsRegistredSuccessfully(false);
            }

        }
    };

    const handleCloseModal = () => {
        navigate('/login');
        setIsRegistredSuccessfully(false);
    };

    const handleCloseModalError = () => {
        navigate('/register');
        setIsError(false);
        setIsDuplicate(false);
    };

    return (
        <>
            <div className="container-login">
                <FormLogin
                    title="Formulario de registro"
                    button="Registrate"
                    confirmPassword={confirmPassword}
                    handle={handleRegister}
                    setIsError={setIsError}
                />
            </div>
            {isRegistredSuccessfully ? (
                <ModalAlerta
                    title="Registro exitoso"
                    message="Ya puedes iniciar sesión"
                    button="Aceptar"
                    handleCloseModal={handleCloseModal}
                />
            ) : (
                <></>
            )}
            {isError ? (
                <ModalAlerta
                    title="Error"
                    message="Las contraseñas no coinciden"
                    button="Aceptar"
                    handleCloseModal={handleCloseModalError}
                />
            ) : (
                <></>
            )}
            {isDuplicate ? (
                <ModalAlerta
                    title="Error"
                    message="El correo ya se encuentra registrado"
                    button="Aceptar"
                    handleCloseModal={handleCloseModalError}
                />
            ) : (
                <></>
            )}
        </>
    );
};

export default RegisterPage;