import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RegisterInput from "../components/RegisterInput";
import AppLogo from "../components/AppLogo";
import { asyncRegisterUser } from "../states/users/action";

function RegisterPage() {
    const { authUser } = useSelector((states) => states);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (authUser !== null) {
            navigate("/");
        }
    });

    const onRegister = ({ name, email, password }) => {
        dispatch(asyncRegisterUser({ name, email, password }));
        navigate("/register");
    };
    if (authUser === null) {
        return (
            <main>
                <div className="auth-page">
                    <div className="auth-page-container">
                        <div className="auth-page__header">
                            <AppLogo />
                            <h1>Sign Up</h1>
                        </div>
                        <div className="auth-page__form">
                            <RegisterInput register={onRegister} />
                        </div>
                        <div className="auth-page__register">
                            <p>
                                Have an account already?
                                <Link to="/login"> Sign In</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
    return null;
}

export default RegisterPage;
