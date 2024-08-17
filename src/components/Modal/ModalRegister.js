import React from "react";
import "./ModalRegister.css";
import FormLogin from "../Login/FormLogin";


const ModalRegister = ({ handleCloseModal }) => {
    const confirmPassword = true;
    return (
        <>
            <div className="container_modal">
                <div className="modal">
                    <div>
                    <span class="close-button" onClick={handleCloseModal}>&times;</span>
                        <FormLogin
                            title="Formulario de registro"
                            button="Registrate"
                            confirmPassword={confirmPassword}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalRegister;