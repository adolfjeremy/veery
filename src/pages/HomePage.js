import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import HeaderBar from "../components/HeaderBar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import { asyncSetLeaderboard } from "../states/leaderboards/action";
import { asyncReceiveThreads } from "../states/threads/action";

function HomePage() {
    const { leaderboards = [], threads = [] } = useSelector((states) => states);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncSetLeaderboard());
        dispatch(asyncReceiveThreads());
    }, [dispatch]);

    // eslint-disable-next-line no-console
    console.log(threads);

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
