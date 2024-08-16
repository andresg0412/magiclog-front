import React from "react";
import ButtonComponent from "../Button/ButtonComponent";
import "./HeaderComponent.css";

const HeaderComponent = () => {
    return (
        <header>
            <nav>
                <div className="desktop">
                    <div><h2>LOGO</h2></div>
                    <div>
                        <ButtonComponent
                            text="Iniciar Sesión"
                            onClick={() => { }}
                            classname="button login"
                            type="button" />

                        <ButtonComponent
                            text="Registrate"
                            onClick={() => { }}
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