import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import HeaderBar from "../components/HeaderBar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import { asyncSetLeaderboard } from "../states/leaderboards/action";
import asyncPopulateUsersAndThreads from "../states/share/action";

function HomePage({ authUser, signOut }) {
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
            <HeaderBar authUser={authUser} signOut={signOut} />
            <main>
                <Sidebar leaderboards={leaderboards} />
                <MainContent threads={threadList} />
            </main>
        </>
    );
}

HomePage.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    authUser: PropTypes.any,
    // eslint-disable-next-line react/forbid-prop-types
    signOut: PropTypes.any,
};

export default HomePage;
