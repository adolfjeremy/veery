/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import VoteButton from "./VoteButton";
import Avatar from "./Avatar";
import postedAt from "../utils";

// eslint-disable-next-line object-curly-newline
function Comment({ threadId, comment, upVotesComment }) {
    const handleUpVotesComment = () => {
        upVotesComment({ threadId, commentId: comment.id });
    };
    return (
        <div className="comment-item" key={comment.id}>
            <div className="thread-item-vote">
                <div className="thread-item-vote__buttons">
                    <span>{comment.upVotesBy.length}</span>
                    <VoteButton handleOnClick={handleUpVotesComment}>
                        <AiOutlineArrowUp />
                    </VoteButton>
                </div>
                <div className="thread-item-vote__buttons">
                    <VoteButton>
                        <AiOutlineArrowDown />
                    </VoteButton>
                    <span>{comment.donwVotesBy}</span>
                </div>
            </div>
            <div className="comment-item-content">
                <div className="comment-item-content__header">
                    <Avatar image="https://ui-avatars.com/api/?name=Dimas%20Saputra&background=random" />
                    <span className="username">{comment.owner.name}</span>
                    <span>{postedAt(comment.createdAt)}</span>
                </div>
                <div className="comment-item-content__body">
                    {parse(comment.content)}
                </div>
            </div>
        </div>
    );
}

const ownerShape = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};

const commentsShape = {
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    owner: PropTypes.shape(ownerShape),
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Comment.propTypes = {
    threadId: PropTypes.string.isRequired,
    comment: PropTypes.shape(commentsShape),
    upVotesComment: PropTypes.func.isRequired,
};

export default Comment;
