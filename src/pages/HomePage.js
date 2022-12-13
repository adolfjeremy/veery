import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import HeaderBar from "../components/HeaderBar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import { asyncSetLeaderboard } from "../states/leaderboards/action";
import asyncPopulateUsersAndThreads from "../states/share/action";

function HomePage() {
    const {
        authUser,
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

    // eslint-disable-next-line no-console
    console.log(authUser);

    return (
        <>
            <HeaderBar authUser={authUser} />
            <main>
                <Sidebar leaderboards={leaderboards} />
                <MainContent threads={threadList} />
            </main>
        </>
    );
}

export default HomePage;
