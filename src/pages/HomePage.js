import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import HeaderBar from "../components/HeaderBar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import { asyncSetLeaderboard } from "../states/leaderboards/action";
// import { asyncReceiveThreads } from "../states/threads/action";
import asyncPopulateUsersAndThreads from "../states/share/action";

function HomePage() {
    const {
        leaderboards = [],
        users = [],
        threads = [],
    } = useSelector((states) => states);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncSetLeaderboard());
        dispatch(asyncPopulateUsersAndThreads());
    }, [dispatch]);

    const threadList = threads.map((thread) => ({
        ...thread,
        user: users.find((user) => user.id === thread.ownerId),
    }));

    return (
        <>
            <HeaderBar />
            <main>
                <Sidebar leaderboards={leaderboards} />
                <MainContent threads={threadList} />
            </main>
        </>
    );
}

export default HomePage;
