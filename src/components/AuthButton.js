import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AuthButton({ destination, children, className }) {
    return (
        <Link className={`authbutton ${className}`} to={destination}>
            {children}
        </Link>
    );
}
AuthButton.propTypes = {
    destination: PropTypes.string,
    children: PropTypes.string,
    className: PropTypes.string,
};

export default AuthButton;
