import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/veery.png";

function AppLogo() {
    return (
        <Link to="/">
            <img src={logo} alt="Veery" />
        </Link>
    );
}

export default AppLogo;
