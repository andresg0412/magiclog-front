import React from "react";

const ModalAlerta = ({ title, message, button, handleCloseModal }) => {
    return (
        <>
            <div className="container_modal">
                <div className="modal">
                    <div>
                        <h2>{title}</h2>
                        <p>{message}</p>
                        <button onClick={handleCloseModal}>{button}</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ModalAlerta;