import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import HeaderBar from "../components/HeaderBar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import { asyncSetLeaderboard } from "../states/leaderboards/action";

function HomePage() {
    const { leaderboards = [] } = useSelector((states) => states);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncSetLeaderboard());
    }, [dispatch]);

    // eslint-disable-next-line no-console
    console.log(leaderboards);
    return (
        <>
            <HeaderBar />
            <main>
                <Sidebar leaderboards={leaderboards} />
                <MainContent />
            </main>
        </>
    );
}

export default HomePage;
