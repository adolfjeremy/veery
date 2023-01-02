import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import HeaderBar from "../components/HeaderBar";
import Main from "../components/styled/Main";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import CreateThreadInput from "../components/CreateThreadInput";
import ThreadList from "../components/ThreadList";
import { asyncSetLeaderboard } from "../states/leaderboards/action";
import asyncPopulateUsersAndThreads from "../states/share/action";
import {
    asyncAddThread,
    asyncUpVoteThread,
    asyncDownVoteThread,
    asyncNeutralizeVoteThread,
} from "../states/threads/action";

function HomePage({ signOut }) {
    const {
        authUser = null,
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
    const onDownVote = (id) => {
        dispatch(asyncDownVoteThread(id));
    };
    const onNeutralizeVote = (id) => {
        dispatch(asyncNeutralizeVoteThread(id));
    };

    const threadList = threads.map((thread) => ({
        ...thread,
        user: users.find((user) => user.id === thread.ownerId),
    }));

    return (
        <>
            <HeaderBar authUser={authUser} signOut={signOut} />
            <Main>
                <Sidebar leaderboards={leaderboards} />
                <MainContent>
                    <CreateThreadInput
                        authUser={authUser}
                        addThread={onAddThread}
                    />
                    <ThreadList
                        authUser={authUser}
                        upVote={onUpVote}
                        downVote={onDownVote}
                        neutralizeVote={onNeutralizeVote}
                        threads={threadList.filter(
                            (thread) =>
                                // eslint-disable-next-line implicit-arrow-linebreak
                                thread.title
                                    .toLowerCase()
                                    // eslint-disable-next-line operator-linebreak
                                    .includes(keyword.toLowerCase()) ||
                                thread.body
                                    .toLowerCase()
                                    .includes(keyword.toLowerCase())
                        )}
                    />
                </MainContent>
            </Main>
        </>
    );
}

HomePage.propTypes = {
    signOut: PropTypes.func.isRequired,
};

export default HomePage;
