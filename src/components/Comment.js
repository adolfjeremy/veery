/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import PropTypes from "prop-types";
// import parse from "html-react-parser";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import VoteButton from "./VoteButton";
import Avatar from "./Avatar";
import postedAt from "../utils";

// eslint-disable-next-line object-curly-newline
function Comment({ comments }) {
    return (
        <div className="comment-container">
            <h2>Comment ({comments.length})</h2>
            <div className="comment-list">
                {comments.map((comment) => (
                    <div className="comment-item" key={comment.id}>
                        <div className="thread-item-vote">
                            <div className="thread-item-vote__buttons">
                                <span>3</span>
                                <VoteButton>
                                    <AiOutlineArrowUp />
                                </VoteButton>
                            </div>
                            <div className="thread-item-vote__buttons">
                                <VoteButton>
                                    <AiOutlineArrowDown />
                                </VoteButton>
                                <span>0</span>
                            </div>
                        </div>
                        <div className="comment-item-content">
                            <div className="comment-item-content__header">
                                <Avatar image="https://ui-avatars.com/api/?name=Dimas%20Saputra&background=random" />
                                <span className="username">
                                    {comment.owner.name}
                                </span>
                                <span>{postedAt(comment.createdAt)}</span>
                            </div>
                            <div className="comment-item-content__body">
                                {comment.content}
                            </div>
                        </div>
                    </div>
                ))}
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
};

Comment.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape(commentsShape)),
};

export default Comment;
