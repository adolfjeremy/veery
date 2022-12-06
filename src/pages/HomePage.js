import React from "react";
import HeaderBar from "../components/HeaderBar";
import Siderbar from "../components/Siderbar";
import MainContent from "../components/MainContent";

function HomePage() {
    return (
        <>
            <HeaderBar />
            <main>
                <Siderbar />
                <MainContent />
            </main>
        </>
    );
}

export default HomePage;
