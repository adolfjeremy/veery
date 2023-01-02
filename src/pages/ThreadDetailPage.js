/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import NotFoundPage from "./NotFoundPage";
import HeaderBar from "../components/HeaderBar";
import Main from "../components/styled/Main";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import ThreadDetail from "../components/ThreadDetail";
import CreateComment from "../components/CreateComment";
import Comment from "../components/Comment";
import { asyncSetLeaderboard } from "../states/leaderboards/action";
import {
    asyncReceiveThreadDetail,
    asyncUpVoteThreadDetail,
    asyncDownVoteThreadDetail,
    asyncNeutralizeVoteThreadDetail,
    asyncAddComment,
    asyncUpVoteComment,
    asyncDownVoteComment,
    asyncNeutralizeVoteComment,
} from "../states/threadDetail/action";

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

    const onUpVote = (threadId) => {
        dispatch(asyncUpVoteThreadDetail(threadId));
    };
    const onDownVote = (threadId) => {
        dispatch(asyncDownVoteThreadDetail(threadId));
    };
    const onNeutralizeVote = (threadId) => {
        dispatch(asyncNeutralizeVoteThreadDetail(threadId));
    };

    const addComment = ({ threadId, content }) => {
        dispatch(asyncAddComment({ threadId, content }));
    };

    const upVotesComment = ({ threadId, commentId }) => {
        dispatch(asyncUpVoteComment({ threadId, commentId }));
    };

    const downVotesComment = ({ threadId, commentId }) => {
        dispatch(asyncDownVoteComment({ threadId, commentId }));
    };

    const neutralizeVotesComment = ({ threadId, commentId }) => {
        dispatch(asyncNeutralizeVoteComment({ threadId, commentId }));
    };

    if (!threadDetail) {
        return <NotFoundPage />;
    }
    return (
        <>
            <HeaderBar authUser={authUser} signOut={signOut} />
            <Main>
                <Sidebar leaderboards={leaderboards} />
                <MainContent>
                    <div className="thread-detail">
                        <ThreadDetail
                            {...threadDetail}
                            authUser={authUser}
                            upVote={onUpVote}
                            downVote={onDownVote}
                            neutralizeVote={onNeutralizeVote}
                        />
                        {authUser !== null && (
                            <CreateComment
                                threadId={threadDetail.id}
                                addComment={addComment}
                            />
                        )}
                        <div className="comment-container">
                            <h2>Comment {threadDetail.comments.length}</h2>
                            <div className="comment-list">
                                {threadDetail.comments.map((comment) => (
                                    <Comment
                                        threadId={threadDetail.id}
                                        comment={comment}
                                        upVotesComment={upVotesComment}
                                        downVotesComment={downVotesComment}
                                        authUser={authUser}
                                        neutralizeVotesComment={
                                            neutralizeVotesComment
                                        }
                                        key={comment.id}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </MainContent>
            </Main>
        </>
    );
}

ThreadDetailPage.propTypes = {
    signOut: PropTypes.func.isRequired,
};

export default ThreadDetailPage;
