import React from "react";
import ButtonComponent from "../Button/ButtonComponent";

const ModalAlerta = ({ title, message, button, handleCloseModal }) => {
    return (
        <>
            <div className="container_modal">
                <div className="modal_alert">
                    <div>
                        <h2>{title}</h2>
                        <p>{message}</p>
                        <ButtonComponent
                            text={button}
                            onClick={handleCloseModal}
                            classname={"button registro"}
                            type="button"
                        />
                    </div>
                </div>

            </div>
        </>
    );
};

export default ModalAlerta;