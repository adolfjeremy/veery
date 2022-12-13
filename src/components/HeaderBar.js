import React from "react";
import PropTypes from "prop-types";
import AppLogo from "./AppLogo";
import SearchBar from "./SearchBar";
import AuthButton from "./AuthButton";

function HeaderBar({ authUser }) {
    return (
        <header>
            <AppLogo />
            <SearchBar />
            {authUser === null && (
                <div className="auth-button-container">
                    <AuthButton destination="/login" className="login">
                        Sign In
                    </AuthButton>
                    <AuthButton destination="/register" className="register">
                        Sign Up
                    </AuthButton>
                </div>
            )}
        </header>
    );
}

HeaderBar.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    authUser: PropTypes.any,
};

export default HeaderBar;
