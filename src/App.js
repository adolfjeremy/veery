import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ThreadDetailPage from "./pages/ThreadDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import Loading from "./components/Loading";
import Spinner from "./components/Spinner";
import { asyncUnsetAuthUser } from "./states/authUser/action";
import { asyncPreloadProcess } from "./states/isPreload/action";

import "./styles/styles.scss";

function App() {
    const { isPreload = false, spinner } = useSelector((states) => states);

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

    return (
        <div className="app-container">
            <Loading />
            {spinner && <Spinner />}
            <Routes>
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/register" element={<RegisterPage />} />
                <Route path="/" element={<HomePage signOut={onSignOut} />} />
                <Route
                    exact
                    path="/threads/:id"
                    element={<ThreadDetailPage signOut={onSignOut} />}
                />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;
