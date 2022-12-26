import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function RegisterInput({ register }) {
    const [name, onNameChange] = useInput("");
    const [email, onEmailChange] = useInput("");
    const [password, onPasswordChange] = useInput("");
    const onHandleRegister = (e) => {
        e.preventDefault();
        register({ name, email, password });
    };

    return (
        <form className="auth-input" onSubmit={onHandleRegister}>
            <input
                type="text"
                value={name}
                onChange={onNameChange}
                placeholder="Name"
                required
            />
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
            <button type="submit">Sign Up</button>
        </form>
    );
}

RegisterInput.propTypes = {
    register: PropTypes.func.isRequired,
};

export default RegisterInput;
