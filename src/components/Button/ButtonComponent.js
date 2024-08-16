import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const ButtonComponent = ({ text, onClick, classname, type }) => {
    return (
        <button className={classname} onClick={onClick} type={type}>
            {text}
        </button>
    );
};

ButtonComponent.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    classname: PropTypes.string,
    type: PropTypes.string
};

ButtonComponent.defaultProps = {
    text: "Boton",
    onClick: () => {},
    classname: "button",
    type: "button"
};

export default ButtonComponent;