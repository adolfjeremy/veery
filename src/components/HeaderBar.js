import React from "react";
import PropTypes from "prop-types";
import { VscSignOut } from "react-icons/vsc";
import AppLogo from "./AppLogo";
import SearchBar from "./SearchBar";
import AuthButton from "./AuthButton";
import Avatar from "./Avatar";

function HeaderBar({ authUser, signOut }) {
    return (
        <header>
            <AppLogo />
            <SearchBar />
            {authUser === null ? (
                <div className="auth-button-container">
                    <AuthButton destination="/login" className="login">
                        Sign In
                    </AuthButton>
                    <AuthButton destination="/register" className="register">
                        Sign Up
                    </AuthButton>
                </div>
            ) : (
                <div className="auth-user-info">
                    <Avatar image={authUser.avatar} />
                    <span>{authUser.name}</span>
                    <button type="button" title="Sign Out" onClick={signOut}>
                        <VscSignOut />
                    </button>
                </div>
            )}
        </header>
    );
}

HeaderBar.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    authUser: PropTypes.any,
    signOut: PropTypes.func.isRequired,
};

export default HeaderBar;
