/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import HeaderBar from "../components/HeaderBar";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import ThreadDetail from "../components/ThreadDetail";
import Comment from "../components/Comment";
import { asyncSetLeaderboard } from "../states/leaderboards/action";
import { asyncReceiveThreadDetail } from "../states/threadDetail/action";

function ThreadDetailPage({ signOut }) {
    const { id } = useParams();
    const {
        leaderboards = [],
        threadDetail = null,
        authUser,
    } = useSelector((states) => states);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncSetLeaderboard());
        dispatch(asyncReceiveThreadDetail(id));
    }, [id, dispatch]);
    console.log(threadDetail);
    if (!threadDetail) {
        return null;
    }
    return (
        <>
            <HeaderBar authUser={authUser} signOut={signOut} />
            <main>
                <Sidebar leaderboards={leaderboards} />
                <MainContent>
                    <div className="thread-detail">
                        <ThreadDetail {...threadDetail} />
                        <Comment />
                    </div>
                </MainContent>
            </main>
        </>
    );
}

ThreadDetailPage.propTypes = {
    signOut: PropTypes.func.isRequired,
};

export default ThreadDetailPage;
