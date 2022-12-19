import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import VoteButton from "./VoteButton";
import Avatar from "./Avatar";
import postedAt from "../utils";
import { authUserShape } from "./HeaderBar";

function Comment({
    threadId,
    comment,
    upVotesComment,
    downVotesComment,
    authUser,
    neutralizeVotesComment,
}) {
    const handleUpVotesComment = () => {
        upVotesComment({ threadId, commentId: comment.id });
    };
    const handleDownVotes = () => {
        downVotesComment({ threadId, commentId: comment.id });
    };
    const handleNeutralizeVotes = () => {
        neutralizeVotesComment({ threadId, commentId: comment.id });
    };
    return (
        <div className="comment-item" key={comment.id}>
            <div className="thread-item-vote">
                <div className="thread-item-vote__buttons">
                    <span>{comment.upVotesBy.length}</span>
                    <VoteButton
                        className={
                            comment.upVotesBy.includes(authUser.id)
                                ? "voted"
                                : ""
                        }
                        handleOnClick={
                            comment.upVotesBy.includes(authUser.id)
                                ? handleNeutralizeVotes
                                : handleUpVotesComment
                        }
                    >
                        <AiOutlineArrowUp />
                    </VoteButton>
                </div>
                <div className="thread-item-vote__buttons">
                    <VoteButton
                        className={
                            comment.downVotesBy.includes(authUser.id)
                                ? "voted"
                                : ""
                        }
                        handleOnClick={
                            comment.downVotesBy.includes(authUser.id)
                                ? handleNeutralizeVotes
                                : handleDownVotes
                        }
                    >
                        <AiOutlineArrowDown />
                    </VoteButton>
                    <span>{comment.downVotesBy.length}</span>
                </div>
            </div>
            <div className="comment-item-content">
                <div className="comment-item-content__header">
                    <Avatar image={comment.owner.avatar} />
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
    downVotesComment: PropTypes.func.isRequired,
    authUser: PropTypes.shape(authUserShape),
    neutralizeVotesComment: PropTypes.func.isRequired,
};

export default Comment;
