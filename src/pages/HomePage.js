/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import HeaderBar, { authUserShape } from "../components/HeaderBar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import { asyncSetLeaderboard } from "../states/leaderboards/action";
import asyncPopulateUsersAndThreads from "../states/share/action";
import { asyncAddThread, asyncUpVoteThread } from "../states/threads/action";

function HomePage({ authUser, signOut }) {
    const {
        leaderboards = [],
        users = [],
        threads = [],
    } = useSelector((states) => states);
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get("query") || "";

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncSetLeaderboard());
        dispatch(asyncPopulateUsersAndThreads());
    }, [dispatch]);

    const onAddThread = ({ title, body }) => {
        dispatch(asyncAddThread({ title, body }));
    };

    const onUpVote = (id) => {
        dispatch(asyncUpVoteThread(id));
    };
    const onDownVote = () => "";

    const threadList = threads.map((thread) => ({
        ...thread,
        user: users.find((user) => user.id === thread.ownerId),
    }));

    return (
        <>
            <HeaderBar authUser={authUser} signOut={signOut} />
            <main>
                <Sidebar leaderboards={leaderboards} />
                <MainContent
                    authUser={authUser}
                    addThread={onAddThread}
                    upVote={onUpVote}
                    downVote={onDownVote}
                    threads={threadList.filter(
                        (thread) =>
                            thread.title
                                .toLowerCase()
                                // eslint-disable-next-line operator-linebreak
                                .includes(keyword.toLowerCase()) ||
                            thread.body
                                .toLowerCase()
                                .includes(keyword.toLowerCase())
                        // eslint-disable-next-line function-paren-newline
                    )}
                />
            </main>
        </>
    );
}

HomePage.propTypes = {
    authUser: PropTypes.shape(authUserShape),
    signOut: PropTypes.func.isRequired,
};

export default HomePage;
