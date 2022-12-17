/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import VoteButton from "./VoteButton";
import Avatar from "./Avatar";
import postedAt from "../utils";

// eslint-disable-next-line object-curly-newline
function Comment({ content, createdAt, owner, commentCount }) {
    return (
        <div className="comment-container">
            <h2>Comment ({commentCount})</h2>
            <div className="comment-list">
                <div className="comment-item">
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
                            <span className="username">{owner.name}</span>
                            <span>{postedAt(createdAt)}</span>
                        </div>
                        <div className="comment-item-content__body">
                            {parse(content)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ownerShape = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};

Comment.propTypes = {
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    owner: PropTypes.shape(ownerShape),
    commentCount: PropTypes.number.isRequired,
};

export default Comment;
