import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function LoginInput({ login }) {
    const [email, onEmailChange] = useInput("");
    const [password, onPasswordChange] = useInput("");
    const onHandleLogin = (e) => {
        e.preventDefault();
        login({ email, password });
    };

    return (
        <form className="auth-input" onSubmit={onHandleLogin}>
            <input
                type="email"
                value={email}
                onChange={onEmailChange}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={onPasswordChange}
                placeholder="Password"
                required
            />
            <button type="submit">Sign In</button>
        </form>
    );
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
};

export default LoginInput;
