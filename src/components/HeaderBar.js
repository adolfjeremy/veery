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
                    <AuthButton
                        destination="/login"
                        type="purple"
                        content="Sign In"
                    />
                    <AuthButton
                        destination="/register"
                        type="white"
                        content="Sign Up"
                    />
                </div>
            ) : (
                <div className="auth-user-info">
                    <Avatar image={authUser.avatar} type="md" />
                    <span>{authUser.name}</span>
                    <button type="button" title="Sign Out" onClick={signOut}>
                        <VscSignOut />
                    </button>
                </div>
            )}
        </header>
    );
}

const authUserShape = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};

HeaderBar.propTypes = {
    authUser: PropTypes.shape(authUserShape),
    signOut: PropTypes.func.isRequired,
};

export { authUserShape };

export default HeaderBar;
