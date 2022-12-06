import React from "react";
import AppLogo from "./AppLogo";
import SearchBar from "./SearchBar";
import AuthButton from "./AuthButton";

function HeaderBar() {
    return (
        <header>
            <AppLogo />
            <SearchBar />
            <div className="auth-button-container">
                <AuthButton destination="/login" className="login">
                    Sign In
                </AuthButton>
                <AuthButton destination="/register" className="register">
                    Sign Up
                </AuthButton>
            </div>
        </header>
    );
}

export default HeaderBar;
