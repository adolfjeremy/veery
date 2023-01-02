import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Main from "../components/styled/Main";
import LoginInput from "../components/LoginInput";
import { asyncSetAuthUser } from "../states/authUser/action";
import AppLogo from "../components/AppLogo";

function LoginPage() {
    const { authUser } = useSelector((states) => states);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (authUser !== null) {
            navigate("/");
        }
    });

    const onLogin = ({ email, password }) => {
        dispatch(asyncSetAuthUser({ email, password }));
    };

    if (authUser === null) {
        return (
            <Main>
                <div className="auth-page">
                    <div className="auth-page-container">
                        <div className="auth-page__header">
                            <AppLogo />
                            <h1>Sign In</h1>
                        </div>
                        <div className="auth-page__form">
                            <LoginInput login={onLogin} />
                        </div>
                        <div className="auth-page__register">
                            <p>
                                Don&apos;t have an account?
                                <Link to="/register"> Sign Up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </Main>
        );
    }
    return null;
}

export default LoginPage;
