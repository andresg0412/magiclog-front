import React from "react";
import ButtonComponent from "../Button/ButtonComponent";
import "./HeaderComponent.css";
import { useNavigate } from "react-router-dom";

const HeaderComponent = ({ setOpenModalRegister }) => {
    const navigate = useNavigate();
    const handleClickModal = () => {
        setOpenModalRegister(true);
    }
    return (
        <header>
            <nav>
                <div className="desktop">
                    <div><h2>LOGO</h2></div>
                    <div>
                        <ButtonComponent
                            text="Iniciar Sesión"
                            onClick={() => {navigate('/login')}}
                            classname="button login"
                            type="button" />

                        <ButtonComponent
                            text="Registrate"
                            onClick={handleClickModal}
                            classname="button registro"
                            type="button" />
                    </div>
                </div>

                <div className="mobile">

                </div>
            </nav>
        </header>

    )
}

export default HeaderComponent;