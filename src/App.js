import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import "./styles/styles.scss";

function App() {
    return (
        <div className="AppContainer">
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    );
}

export default App;
