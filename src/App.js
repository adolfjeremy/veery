import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { asyncUnsetAuthUser } from "./states/authUser/action";
import { asyncPreloadProcess } from "./states/isPreload/action";

import "./styles/styles.scss";

function App() {
    const { authUser = null, isPreload = false } = useSelector(
        (states) => states
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncPreloadProcess());
    }, [dispatch]);

    const onSignOut = () => {
        dispatch(asyncUnsetAuthUser());
    };

    if (isPreload) {
        return null;
    }

    // eslint-disable-next-line no-console
    console.log(authUser, "1");
    return (
        <div className="app-container">
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                    path="/"
                    element={
                        <HomePage authUser={authUser} signOut={onSignOut} />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
